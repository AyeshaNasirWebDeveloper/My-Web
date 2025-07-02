// types.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';