export interface SnackbarState {
  message: string
  open: boolean
  type: MessageType
}

export type MessageType = 'error' | 'warning' | 'success';