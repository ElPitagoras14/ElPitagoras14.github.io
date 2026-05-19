"use client";

import { useForm } from "@tanstack/react-form";
import axios from "axios";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormDict {
  name: { label: string; placeholder: string; error: string };
  email: { label: string; placeholder: string; error: string };
  subject: {
    label: string;
    placeholder: string;
    options: { value: string; label: string }[];
  };
  message: { label: string; placeholder: string; error: string };
  submit: string;
  submitting: string;
  success: string;
  error: string;
}

interface Props {
  dict: FormDict;
}

export default function ContactForm({ dict }: Props) {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const formSchema = z.object({
    name: z.string().min(2,  dict.name.error ),
    email: z.string().email( dict.email.error ),
    message: z.string().min(10,  dict.message.error ),
  });

  const form = useForm({
    defaultValues: { name: "", email: "", message: "" },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      try {
        await axios.post(
          "https://formspree.io/f/mvoygrrb",
          {
            name: value.name,
            email: value.email,
            message: value.message,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        );

        setSubmitState("success");
        form.reset();
      } catch (error) {
        console.error(error);
        setSubmitState("error");
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup className="gap-6">
        {/* Bigger field sizing via custom field overrides */}
        <form.Field name="name">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] text-blue-600 dark:text-blue-400 font-medium"
                >
                  {dict.name.label}
                </FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder={dict.name.placeholder}
                  aria-invalid={isInvalid}
                  className="h-10 px-3 text-sm"
                />
                {isInvalid && (
                  <FieldError
                    errors={field.state.meta.errors}
                  />
                )}
              </Field>
            );
          }}
        </form.Field>

        <form.Field name="email">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] text-blue-600 dark:text-blue-400 font-medium"
                >
                  {dict.email.label}
                </FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder={dict.email.placeholder}
                  aria-invalid={isInvalid}
                  className="h-10 px-3 text-sm"
                />
                {isInvalid && (
                  <FieldError
                    errors={field.state.meta.errors}
                  />
                )}
              </Field>
            );
          }}
        </form.Field>

        <form.Field name="message">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] text-blue-600 dark:text-blue-400 font-medium"
                >
                  {dict.message.label}
                </FieldLabel>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder={dict.message.placeholder}
                  rows={5}
                  aria-invalid={isInvalid}
                  className="min-h-32 px-3 py-2.5 text-sm"
                />
                {isInvalid && (
                  <FieldError
                    errors={field.state.meta.errors}
                  />
                )}
              </Field>
            );
          }}
        </form.Field>

        <div className="flex flex-col gap-3">
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full"
            disabled={form.state.isSubmitting}
          >
            {form.state.isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                {dict.submitting}
              </>
            ) : (
              dict.submit
            )}
          </Button>

          {submitState === "success" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="size-4 shrink-0" />
              <span>{dict.success}</span>
            </div>
          )}

          {submitState === "error" && (
            <div className="flex items-center gap-2 text-sm text-red-500">
              <AlertCircle className="size-4 shrink-0" />
              <span>{dict.error}</span>
            </div>
          )}
        </div>
      </FieldGroup>
    </form>
  );
}
