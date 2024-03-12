"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from "zod"

const formSchema = z.object({
    input: z.string().min(2).max(50),
});

export default function SearchInput() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        router.push(`/search/${values.input}`);
        form.reset();
    }

    const router = useRouter();
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} name='input' render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder='Search...' {...field} />
                        </FormControl>
                    </FormItem>
                )}></FormField>
            </form>
        </Form>
    )
}
