'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '../ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';
import LoadingIndicator from '../loading-spiner';

// Validation schema using Zod
const contactFormSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z
        .string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Must be a valid email' }),
    subject: z.string().min(1, { message: 'Subject is required' }),
    message: z
        .string()
        .min(1, { message: 'Message is required' })
        .max(500, { message: 'Message too long' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

async function onSubmit(data: ContactFormValues) {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const json = await response.json();

        if (json.success) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        alert('Error sending message.');
        console.error(error);
    }
}


export default function ContactForm() {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });


    return (
        <>
            <div className='mx-auto pb-10 max-w-4xl'>
                <div className='max-w-4xl p-5 mt-3 mx-auto'>
                    <Breadcrumb >
                        <BreadcrumbList className="py-6">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Projects</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h3 className="text-2xl pb-3 font-mono" >Have an Interesting Project in Mind?</h3>
                    <p className="text-xl pb-7 font-mono">Got a project in mind? Need to bring an idea to life or want to chat about technology? Let’s talk!</p>
                </div>
                <Card className="mx-5 p-6">

                    <h3 className='text-2xl'>Send a message</h3>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input  placeholder="Alan Turin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="alanturin@email.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Subject Field */}
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Subject of your message" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Message Field */}
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Write your message here..." rows={5} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button variant="orange" type="submit" className="w-full">
                                Send Message <LoadingIndicator/>
                            </Button>
                        </form>
                    </Form>
                </Card>
            </div >
        </>
    );
}
