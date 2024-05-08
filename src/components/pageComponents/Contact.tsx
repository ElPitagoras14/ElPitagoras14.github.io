"use client";

import { Card, CardContent } from "../ui/card";
import { TypographyP, TypographyH6, TypographyH2 } from "../ui/typography";
import { Separator } from "../ui/separator";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Field } from "../Field";
import { Button } from "../ui/button";

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

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section
      className="flex flex-col items-center justify-center space-y-12 p-12"
      id="contact"
    >
      <div className="flex flex-col items-center space-y-5">
        <TypographyH2>Contact Me</TypographyH2>
        <Separator
          className="w-10 py-1 rounded-sm"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        />
        <TypographyP>Feel free to contact me.</TypographyP>
      </div>
      <Card className="w-[60%] text-lg shadow">
        <CardContent className="py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              {formFields.map((field) => (
                <Field key={field.name} formInfo={field} form={form} />
              ))}
              <div className="pt-2 pb-4 flex justify-end">
                <Button type="submit" size={"lg"}>
                  <TypographyH6>Submit</TypographyH6>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
