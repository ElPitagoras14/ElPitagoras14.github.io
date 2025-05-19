"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getTranslations } from "@/i18n";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";

interface ContactFormProps {
  lang: string;
}

interface Field {
  name: "name" | "email" | "message";
  label: string;
  type: "text" | "email" | "textarea";
}

export default function ContactForm({ lang }: ContactFormProps) {
  const t = getTranslations(lang);
  const {
    contact: {
      connect: { form },
    },
  } = t;

  const fields: Field[] = [
    {
      name: "name",
      label: form.name.label,
      type: "text",
    },
    {
      name: "email",
      label: form.email.label,
      type: "email",
    },
    {
      name: "message",
      label: form.message.label,
      type: "textarea",
    },
  ];

  const formSchema = z.object({
    name: z.string().min(1, { message: form.name.error }),
    email: z.string().email({ message: form.email.error }),
    message: z.string().min(1, { message: form.message.error }),
  });

  const formInfo = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { name, email, message } = data;

    const promise = fetch("https://formspree.io/f/mvoygrrb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    toast.promise(promise, {
      loading: form.loading,
      success: form.success,
      error: form.error,
    });

    await promise;
  };

  return (
    <Form {...formInfo}>
      <form onSubmit={formInfo.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {fields.map((fieldInfo: Field) => (
            <FormField
              key={fieldInfo.name}
              control={formInfo.control}
              name={fieldInfo.name}
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-sm md:text-base">{fieldInfo.label}</FormLabel>
                  <FormControl className="text-sm md:text-base">
                    {fieldInfo.type === "textarea" ? (
                      <Textarea
                        placeholder={fieldInfo.label}
                        {...field}
                        className="resize-none h-24"
                      />
                    ) : (
                      <Input
                        placeholder={fieldInfo.label}
                        type={fieldInfo.type}
                        {...field}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button className="text-base md:text-lg px-6 py-5 rounded-4xl hover:cursor-pointer">
            {form.submit}
          </Button>
        </div>
      </form>
      <Toaster />
    </Form>
  );
}
