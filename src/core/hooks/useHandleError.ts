import axios from 'axios';
import { useToast } from '@/shared/components/ui/use-toast.ts';

// Custom hook for error handling
export const useHandleError = () => {
  const { toast } = useToast();

  return (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const err = error.response;
      if (err?.status === 500) {
        toast({
          title: 'Error',
          description: 'An error occurred on the server. Please try again later.',
          variant: 'destructive',
        });
      } else if (err?.data) {
        const errorMessage = typeof err.data === 'object' ? JSON.stringify(err.data) : err.data;
        toast({
          title: 'Uh oh! Something went wrong.',
          description: errorMessage,
          variant: 'destructive',
        });
      } else if (error.status === 401) {
        toast({
          title: 'Unauthorized',
          description: 'You are not authorized to perform this action. Please log in and try again.',
          variant: 'destructive',
        });
      } else if (error?.message) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request. Error message: ' + error.message,
          variant: 'destructive',
        });
      } else if (error?.code) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request. Error code: ' + error.code,
          variant: 'destructive',
        });
      }
    }
  };
};
