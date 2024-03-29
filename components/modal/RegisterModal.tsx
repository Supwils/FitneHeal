'use client';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';
import {
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import toast from 'react-hot-toast';
import Button from '../Button';
import { sign } from 'crypto';






const RegisterModal = () => {
    const resgisterModal = useRegisterModal();
    const LoginModal = useLoginModal();
    const [ isLoading, setIsLoading ] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() =>
            {
                toast.success('Account created');
                resgisterModal.onClose();
                LoginModal.onOpen();
            }).catch((error) => {
                toast.error('something went wrong')
            }).finally(() => {
                setIsLoading(false);
            });
    }
    const toggle = useCallback(() => {
        resgisterModal.onClose();
        LoginModal.onOpen();
    }, [LoginModal, resgisterModal]);
    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title="Welcome to FineHeal"
                subtitle="Create an account to explore"
            />
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='name'
                label='Name'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='password'
                label='Password'
                type='password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )
    
    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <div
                className='
                text-neutral-500
                text-center
                mt-4
                font-light
                '    
            >
                <div className=' justify-center flex flex-row items-center gap-2'>
                    <div>
                        Already have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className='
                            text-neutral-700
                            cursor-pointer
                            hover:underline
                        '>
                         Log in
                    </div>
                </div>
            </div>
        </div>

    )
    return (
        <Modal
            disabled={isLoading}
            isOpen={resgisterModal.isOpen}
            title='Register'
            actionLabel='Continue'
            onClose={resgisterModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}
export default RegisterModal