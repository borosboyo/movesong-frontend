import { useEffect, useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/shared/components/ui/button.tsx';
import { Checkbox } from '@/shared/components/ui/checkbox.tsx';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table.tsx';
import { ShareDto } from '@/swagger/share/models/share-dto.ts';
import profileService from '@/modules/profile/profile-service.ts';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useNavigate } from 'react-router-dom';
import shareService from '@/modules/share/share-service.ts';

const useColumns = (shares: ShareDto[], setShares: React.Dispatch<React.SetStateAction<ShareDto[]>>) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const handleError = useHandleError();
  const navigate = useNavigate();

  const updateShareVisibility = (share: ShareDto) => {
    const updatedShares = shares.map((s) => (s.id === share.id ? { ...s, visible: !s.visible } : s));
    setShares(updatedShares);
  };

  const columns: ColumnDef<ShareDto>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label={t('profile.sharesTab.sharesTable.selectAll')}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={t('profile.sharesTab.sharesTable.selectRow')}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'sharedPlaylistName',
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            {t('profile.sharesTab.sharesTable.sharedPlaylistName')}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className={`ml-4`}>{row.getValue('sharedPlaylistName')}</div>,
    },
    {
      accessorKey: 'views',
      header: () => <div className="text-right">{t('profile.sharesTab.sharesTable.views')}</div>,
      cell: ({ row }) => {
        return <div className="text-right font-medium">{row.getValue('views')}</div>;
      },
    },
    {
      accessorKey: 'visible',
      header: () => <div className="text-right">{t('profile.sharesTab.sharesTable.visible')}</div>,
      cell: ({ row }) => {
        const visible: boolean = row.getValue('visible');
        return (
          <div className="text-right font-medium">
            {visible ? t('profile.sharesTab.sharesTable.public') : t('profile.sharesTab.sharesTable.private')}
          </div>
        );
      },
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const share: ShareDto = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">{t('profile.sharesTab.sharesTable.openMenu')}</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t('profile.sharesTab.sharesTable.actions')}</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard
                    .writeText(`${window.location.origin}/movesong-frontend/share/${share.id}`)
                    .then(() => {
                      toast({
                        title: t('profile.sharesTab.sharesTable.linkCopiedToast.title'),
                        description: t('profile.sharesTab.sharesTable.linkCopiedToast.description'),
                        variant: 'success',
                      });
                    })
                    .catch((error) => {
                      handleError(error);
                    });
                }}
              >
                {t('profile.sharesTab.sharesTable.copyLink')}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  navigate(`/movesong-frontend/share/${share.id}`);
                }}
              >
                {t('profile.sharesTab.sharesTable.open')}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  const shareReq: ShareDto = {
                    ...share,
                    visible: !share.visible,
                  };
                  shareService
                    .updateShare(shareReq)
                    .then(() => {
                      updateShareVisibility(share);
                      toast({
                        title: t('profile.sharesTab.sharesTable.changeStatusToast.title'),
                        description: t('profile.sharesTab.sharesTable.changeStatusToast.description'),
                        variant: 'success',
                      });
                    })
                    .catch((error) => handleError(error));
                }}
              >
                {t('profile.sharesTab.sharesTable.changeStatus')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return columns;
};
export function SharesTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [shares, setShares] = useState<ShareDto[]>([]);
  const handleError = useHandleError();
  const { user } = useAuth();
  const columns: ColumnDef<ShareDto>[] = useColumns(shares, setShares);
  const { t } = useTranslation();

  const table = useReactTable({
    data: shares,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    if (user?.email) {
      profileService
        .getSharesByMovesongEmail(user.email)
        .then((resp) => {
          if (resp.shares != null) {
            setShares(resp.shares);
          }
        })
        .catch((error) => {
          handleError(error);
        });
    }
  }, [user?.email]);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder={t('profile.sharesTab.sharesTable.filterPlaylists')}
          value={(table.getColumn('sharedPlaylistName')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('sharedPlaylistName')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {t('profile.sharesTab.sharesTable.columns')} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(value)}
                  >
                    {t(`profile.sharesTab.sharesTable.${column.id}`)}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {t('profile.sharesTab.sharesTable.noResults')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} {t('profile.sharesTab.sharesTable.selected')}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {t('profile.sharesTab.sharesTable.previous')}
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            {t('profile.sharesTab.sharesTable.next')}
          </Button>
        </div>
      </div>
    </div>
  );
}
