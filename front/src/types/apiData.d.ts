export interface ApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}
