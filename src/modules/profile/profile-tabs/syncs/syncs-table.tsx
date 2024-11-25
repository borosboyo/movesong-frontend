import React, { useEffect, useState } from 'react';
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
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/components/ui/table.tsx';
import profileService from '@/modules/profile/profile-service.ts';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { SyncDto } from '@/swagger/transform';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/components/ui/dialog.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select.tsx';

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatInterval = (interval: number) => {
  switch (interval) {
    case 1:
      return 'Hourly';
    case 24:
      return 'Daily';
    case 168:
      return 'Weekly';
    default:
      return `${interval} hours`;
  }
};

const useColumns = (syncs: SyncDto[], setSyncs: React.Dispatch<React.SetStateAction<SyncDto[]>>) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const handleError = useHandleError();

  const updateSyncEnabled = (sync: SyncDto) => {
    const updatedSyncs = syncs.map((s) => (s.id === sync.id ? { ...s, enabled: !s.enabled } : s));
    setSyncs(updatedSyncs);
  };

  const updateSyncInterval = (sync: SyncDto, interval: number) => {
    const updatedSyncs = syncs.map((s) => (s.id === sync.id ? { ...s, interval } : s));
    setSyncs(updatedSyncs);
  }

  const deleteSync = (sync: SyncDto) => {
    const updatedSyncs = syncs.filter((s) => s.id !== sync.id);
    setSyncs(updatedSyncs);
  }

  const columns: ColumnDef<SyncDto>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label={t('profile.syncsTab.syncsTable.selectAll')}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={t('profile.syncsTab.syncsTable.selectRow')}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'playlistName',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {t('profile.syncsTab.syncsTable.playlistName')}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className={`ml-4`}>{row.getValue('playlistName')}</div>,
    },
    {
      accessorKey: 'lastSyncDate',
      header: () => <div className="text-right">{t('profile.syncsTab.syncsTable.lastSyncDate')}</div>,
      cell: ({ row }) => {
        return <div className="text-right font-medium">{formatDate(row.getValue('lastSyncDate'))}</div>;
      },
    },
    {
      accessorKey: 'interval',
      header: () => <div className="text-right">{t('profile.syncsTab.syncsTable.interval')}</div>,
      cell: ({ row }) => {
        return <div className="text-right font-medium">{formatInterval(row.getValue('interval'))}</div>;
      },
    },
    {
      accessorKey: 'enabled',
      header: () => <div className="text-right">{t('profile.syncsTab.syncsTable.enabled')}</div>,
      cell: ({ row }) => {
        const enabled: boolean = row.getValue('enabled');
        return (
          <div className="text-right font-medium">
            {enabled ? t('profile.syncsTab.syncsTable.enabled') : t('profile.syncsTab.syncsTable.disabled')}
          </div>
        );
      },
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const sync: SyncDto = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">{t('profile.syncsTab.syncsTable.openMenu')}</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t('profile.syncsTab.syncsTable.actions')}</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => {
                const syncReq: SyncDto = {
                  ...sync,
                  enabled: !sync.enabled,
                };
                profileService.updateSync(syncReq).then(() => {
                  updateSyncEnabled(sync);
                  toast({
                    title: t('profile.syncsTab.syncsTable.changeStatusToast.title'),
                    description: t('profile.syncsTab.syncsTable.changeStatusToast.description'),
                    variant: 'success',
                  });
                }).catch((error) => handleError(error));
              }}>{t('profile.syncsTab.syncsTable.changeStatus')}</DropdownMenuItem>
              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>{t('profile.syncsTab.syncsTable.changeInterval')}</DropdownMenuItem>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{t('profile.syncsTab.syncsTable.changeIntervalDialog.header')}</DialogTitle>
                    <DialogDescription>
                      {t('profile.syncsTab.syncsTable.changeIntervalDialog.text')}
                    </DialogDescription>
                  </DialogHeader>
                  <Select
                    value={sync!.interval!.toString()}
                    onValueChange={(value) => {
                      const syncReq: SyncDto = {
                        ...sync,
                        interval: parseInt(value),
                      };
                      profileService.updateSync(syncReq).then(() => {
                        updateSyncInterval(sync, parseInt(value));
                        toast({
                          title: t('profile.syncsTab.syncsTable.changeIntervalToast.title'),
                          description: t('profile.syncsTab.syncsTable.changeIntervalToast.description'),
                          variant: 'success',
                        });
                      }).catch((error) => handleError(error));
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={sync.interval} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">{t('sync.hourly')}</SelectItem>
                      <SelectItem value="24">{t('sync.daily')}</SelectItem>
                      <SelectItem value="168">{t('sync.weekly')}</SelectItem>
                    </SelectContent>
                  </Select>
                </DialogContent>
              </Dialog>
              <DropdownMenuItem
                onClick={() => {
                  profileService.deleteSync(sync.id!).then(() => {
                    deleteSync(sync);
                    toast({
                      title: t('profile.syncsTab.syncsTable.deleteToast.title'),
                      description: t('profile.syncsTab.syncsTable.deleteToast.description'),
                      variant: 'success',
                    });
                  }).catch((error) => {
                    handleError(error);
                  });
                }}
              >
                {t('profile.syncsTab.syncsTable.delete')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return columns;
};
export function SyncsTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [syncs, setSyncs] = useState<SyncDto[]>([]);
  const handleError = useHandleError();
  const { user } = useAuth();
  const columns: ColumnDef<SyncDto>[] = useColumns(syncs, setSyncs);
  const { t } = useTranslation();

  const table = useReactTable({
    data: syncs,
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
        .getSyncsByMovesongEmail(user.email)
        .then((resp) => {
          if (resp.syncs != null) {
            setSyncs(resp.syncs);
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
          placeholder={t('profile.syncsTab.syncsTable.filterPlaylists')}
          value={(table.getColumn('playlistName')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('playlistName')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {t('profile.syncsTab.syncsTable.columns')} <ChevronDown className="ml-2 h-4 w-4" />
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
                    onCheckedChange={(value) =>
                      column.toggleVisibility(value)
                    }
                  >
                    {t(`profile.syncsTab.syncsTable.${column.id}`)}
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
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {t('profile.syncsTab.syncsTable.noResults')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} {t('profile.syncsTab.syncsTable.selected')}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {t('profile.syncsTab.syncsTable.previous')}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {t('profile.syncsTab.syncsTable.next')}
          </Button>
        </div>
      </div>
    </div>
  );
}
