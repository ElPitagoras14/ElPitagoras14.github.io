"use client";

import Field from "@/components/field";
import { Meteors } from "@/components/magicui/meteors";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "John Doe",
    validation: z.string().min(1),
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "example@example.com",
    validation: z.string().email().min(1),
  },
  {
    type: "textarea",
    name: "message",
    label: "Message",
    placeholder: "Hello...",
    validation: z.string().min(1),
  },
];

const formSchema = z.object(
  formFields.reduce((acc, field) => {
    acc[field.name] = field.validation;
    return acc;
  }, {} as Record<string, z.ZodType<any, any>>)
);

export default function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    axios
      .post("https://formspree.io/f/mvoygrrb", data)
      .then(() => {
        form.reset();
      })
      .catch(() => {});
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="relative flex w-[60rem]  flex-col items-center justify-center overflow-hidden rounded-lg">
        <Meteors number={30} className="mt-24" />
        <div className="w-[100%] md:w-[60%] text-lg shadow self-center z-10">
          <CardContent className="py-2 md:py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-4"
              >
                {formFields.map((field) => (
                  <Field key={field.name} formInfo={field} form={form} />
                ))}
                <Button type="submit">
                  <p>Submit</p>
                </Button>
              </form>
            </Form>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
