import React from 'react'
import {CreateView} from "@/components/refine-ui/views/create-view.tsx";
import {Breadcrumb} from "@/components/refine-ui/layout/breadcrumb.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useBack} from "@refinedev/core";
import {Separator} from "@/components/ui/separator.tsx";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {classSchema} from "@/lib/schema.ts";
import * as z from "zod";

import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";

const Create = () => {
    const back = useBack();

    const form = useForm({
        resolver: zodResolver(classSchema),
        refineCoreProps: {
            resource: 'classes',
            action: 'create'
        },
        defaultValues: {
            status: 'active',
        },
    });

    function onSubmit(values: z.infer<typeof classSchema>) {
        try {
            console.log(values);
        } catch (e) {
            console.log('Error creating classes' , e)
        }
    }
    return (
        <CreateView className={'class-view'}>
            <Breadcrumb/>

            <h1 className={'page-title'}>Create a Class</h1>

            <div className={'intro-row'}>
                <p>Provide the required information below to add a class.</p>

                <Button onClick={() => back}>Go Back</Button>
            </div>

            <Separator/>

            <div className={"my-4 flex items-center"}>
                <Card className={'class-form-card'}>
                    <CardHeader className={'relative z-10'}>
                        <CardTitle className={'text-2xl pb-0 font-bold'}>Fill out the form</CardTitle>
                    </CardHeader>

                    <Separator/>

                    <CardContent className={'mt-7'}>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-5'}>
                                <FormField
                                    control={form.control}
                                    name={'username'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder={'shadcn'} {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <Button type={'submit'}>Submit</Button>

                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </CreateView>
    )
}
export default Create
