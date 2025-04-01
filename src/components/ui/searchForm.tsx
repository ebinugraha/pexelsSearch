"use client"

import { Search } from "lucide-react"
 
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
 
const formSchema = z.object({
  search: z.string().min(2, {message: "Search must be at least 2 characters long"}).max(50),
})

export const SearchForm = ({loading, searchQuery, onSearchSubmit} : {loading: boolean, searchQuery: string, onSearchSubmit: (search: string) => void}) => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          search: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        onSearchSubmit(values.search)
    }

    return (
        // I want to center it form
        <div className="max-w-2xl mx-auto mb-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-between gap-x-1.5">
                        <div className="w-full">
                            <FormField
                            control={form.control}
                            name="search"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input placeholder="Search image..." {...field} className="w-full" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <Button type="submit"><Search/></Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}