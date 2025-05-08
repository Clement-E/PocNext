import { ZodError } from "zod"

export type ActionState = {
  message: string,
  payload?: FormData,
  fieldErrors: Record<string, string[] | undefined>
}

export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {

  if (error instanceof ZodError) {
  return {
    message: error.errors[0].message,
    fieldErrors: error.flatten().fieldErrors,
    payload: formData
  }
  } else if (error instanceof Error) {
    return {
      message: error.message,
      payload: formData,
      fieldErrors: {}
    }
  } else {
    return {
      message: "Woops, shit happend",
      payload: formData,
      fieldErrors: {}
    }
  }

}