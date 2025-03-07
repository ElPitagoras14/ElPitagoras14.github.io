"use client";

import { Card, CardContent } from "../ui/card";
import { TypographyP, TypographyH6, TypographyH2 } from "../ui/typography";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Field } from "../field";
import { Button } from "../ui/button";
import axios from "axios";
import { TitleSeparator } from "../TitleSeparator";

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
    axios
      .post("https://formspree.io/f/mvoygrrb", data)
      .then(() => {
        form.reset();
      })
      .catch(() => {});
  };

  return (
    <section
      className="flex flex-col px-12 md:px-24 pt-12 pb-4 md:py-12 space-y-12"
      id="contact"
    >
      <div className="flex flex-col items-center space-y-5 text-center">
        <TypographyH2>Contact Me</TypographyH2>
        <TitleSeparator />
        <TypographyP className="w-[70%]">Feel free to contact me.</TypographyP>
      </div>
      <Card className="w-[100%] lg:w-[60%] text-lg shadow self-center">
        <CardContent className="py-2 md:py-4">
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
