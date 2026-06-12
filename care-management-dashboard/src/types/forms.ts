export interface FormSubmission {
  id: string;

  userId: number;

  formType:
    | "Health Assessment"
    | "Incident Report";

  submittedAt: string;

  data: unknown;
}