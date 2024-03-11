'use client'

import {ChangeEvent, useState} from 'react'
import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import axios from "axios";
import {GQLService} from "@/src/services/GQLService";
import {MultiStepLoader} from "@/src/components/ui/multi-step-loader";

interface SignupComponentState {
    message?: string;
    about?: string;
    referrer?: string;
    lastName?: string;
    firstName?: string;
    password?: string;
    username?: string;
    email?: string;
    code?: string;
    errors?: any;
    promptCode?: boolean;
    displaySuccess?: boolean;
}

export default function SignupComponent() {
    const [state, setState] = useState<SignupComponentState>({
        /*errors: [
            { message: "TTTEEESSSSTTTT" }
        ]*/
    });
    const [loading, setLoading] = useState<Boolean>(false);
    const LOADING_STATES = [
        {
            text: "Making a sandwich"
        },
        {
            text: "Cleaning The Dishes"
        }
    ];
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let newState: any = {
            ...state
        };
        newState[event.target.name] = event.target.value;
        console.log("newState:", newState);
        setState({
            // ...state,
            ...newState
        });
    }
    const onSave = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (!state.code) {
            setLoading(true);
            try {
                const res = await GQLService.signUp({  // axios.post(process.env.REACT_APP_SERVER_URL + '/api/signup', {
                    _id: state.username,
                    email: state.email,
                    username: state.username,
                    password: state.password,
                    data: {
                        message: state.message,
                        about: state.about,
                        referrer: state.referrer
                    }
                });
                setLoading(false);
                if (res.errors) {
                    setState({
                        ...state,
                        errors: res.errors
                    });
                    return;
                }
            }catch(err: any) {
                setLoading(false);
                switch(err.message){
                    case("User is not confirmed."):
                        setState({
                            ...state,
                            promptCode: true
                        })
                        return;
                }
                setState({
                    ...state,
                    errors: [err]
                });
                return;
            }
            setLoading(false);

            setState({
                ...state,
                promptCode: true
            });
            return;
        }
        setLoading(true);
        try {


            const res = await GQLService.finishSignUp({// await axios.post(process.env.REACT_APP_SERVER_URL + '/api/finish_signup', {
                // email: state.email,
                username: state.username,
                password: state.password,
                code: state.code
            });
            setLoading(false);
            if (res.errors) {
                setState({
                    ...state,
                    errors: res.errors
                });
                return;
            }
        }catch(err: any) {

            setLoading(false);
            setState({
                ...state,
                errors: [err]
            });
            return;
        }
        setLoading(false);
        setState({
            displaySuccess: true
        })
        // props.onSuccess(res)
    }
    return (
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="lg:flex lg:space-x-20">
                    {/* Left side */}
                    <div className="grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
                        {/* Avatars */}
                        <div className="flex -space-x-3 -ml-0.5 mb-6">
                            <Image
                                className="rounded-full border-2 border-slate-900 box-content"
                                src={Avatar01}
                                width={40}
                                height={40}
                                alt="Avatar 01"
                            />
                            <Image
                                className="rounded-full border-2 border-slate-900 box-content"
                                src={Avatar02}
                                width={40}
                                height={40}
                                alt="Avatar 02"
                            />
                            <Image
                                className="rounded-full border-2 border-slate-900 box-content"
                                src={Avatar03}
                                width={40}
                                height={40}
                                alt="Avatar 03"
                            />
                            <Image
                                className="rounded-full border-2 border-slate-900 box-content"
                                src={Avatar04}
                                width={40}
                                height={40}
                                alt="Avatar 04"
                            />
                        </div>
                        {/* Headline */}
                        <h1 className="h2 font-hkgrotesk mb-8 text-center lg:text-left">
                            Join A Community of Solo or Independent Hackers and Hustlers
                        </h1>
                        {/* List */}
                        <ul className="inline-flex flex-col text-lg text-slate-500 space-y-3">
                            <li className="flex items-center">
                                <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                </svg>
                                <span>24/7 Discord Chat</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                </svg>
                                <span>Daily Stand Up Chat</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                </svg>
                                <span>Accountability, Community, and New Friends</span>
                            </li>
                        </ul>
                    </div>
                    {/* Right side */}
                    <div className="relative w-full max-w-md mx-auto">
                        {/* Bg gradient */}
                        <div
                            className="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-800 -z-10"
                            aria-hidden="true"/>
                        <div className="p-6 md:p-8">
                            <div className="font-hkgrotesk text-xl font-bold mb-6">Tell Us About Yourself</div>
                            {/* Form */}
                            <form onSubmit={onSave}>
                                {
                                    state.errors &&
                                    state.errors.map((error: any, i: number) => {
                                        return <div
                                            key={i}
                                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                                            role="alert">
                                            <strong className="font-bold">Error</strong>
                                            <span className="block sm:inline">{
                                                error.message
                                            }</span>
                                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
                                        </div>

                                    })
                                }
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm text-slate-400 font-medium mb-1"
                                               htmlFor="referrer">
                                            Username <span className="text-rose-500">*</span>
                                        </label>
                                        <input id="username" name="username" className="form-input text-sm py-2 w-full"
                                               type="text"
                                               value={state.username} onChange={handleChange}
                                               required/>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-400 font-medium mb-1"
                                               htmlFor="referrer">
                                            Password <span className="text-rose-500">*</span>
                                        </label>
                                        <input id="password" name="password" className="form-input text-sm py-2 w-full"
                                               type="password"
                                               value={state.password} onChange={handleChange}
                                               required/>
                                    </div>
                                    {
                                        state.promptCode &&
                                        <div>
                                            <label className="block text-sm text-slate-400 font-medium mb-1"
                                                   htmlFor="referrer">
                                                SignUp Code(Check Your Email) <span className="text-rose-500">*</span>
                                            </label>
                                            <input id="code" name="code"
                                                   className="form-input text-sm py-2 w-full"
                                                   type="text"
                                                   value={state.code} onChange={handleChange}
                                                   required/>
                                        </div>
                                    }
                                    {
                                        !state.promptCode &&
                                        <>
                                            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                                <div className="sm:w-1/2">
                                                    <label className="block text-sm text-slate-400 font-medium mb-1"
                                                           htmlFor="name">
                                                        First Name <span className="text-rose-500">*</span>
                                                    </label>
                                                    <input id="firstName" name="firstName"
                                                           className="form-input text-sm py-2 w-full" type="text"
                                                           value={state.firstName} onChange={handleChange}
                                                           required/>
                                                </div>
                                                <div className="sm:w-1/2">
                                                    <label className="block text-sm text-slate-400 font-medium mb-1"
                                                           htmlFor="surname">
                                                        Last Name <span className="text-rose-500">*</span>
                                                    </label>
                                                    <input id="lastName" name="lastName"
                                                           className="form-input text-sm py-2 w-full" type="text"
                                                           value={state.lastName} onChange={handleChange}
                                                           required/>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm text-slate-400 font-medium mb-1"
                                                       htmlFor="email">
                                                    Email <span className="text-rose-500">*</span>
                                                </label>
                                                <input id="email" name="email" className="form-input text-sm py-2 w-full"
                                                       type="email"
                                                       value={state.email} onChange={handleChange}
                                                       required/>
                                            </div>

                                            {/*<div>
                                                <label className="block text-sm text-slate-400 font-medium mb-1"
                                                       htmlFor="phone">
                                                    Phone <span className="text-rose-500">*</span>
                                                </label>
                                                <input id="phone" className="form-input text-sm py-2 w-full" type="text"
                                                       required/>
                                            </div>*/}
                                            <div>
                                                <label className="block text-sm text-slate-400 font-medium mb-1"
                                                       htmlFor="referrer">
                                                    How did you hear about us? <span className="text-rose-500">*</span>
                                                </label>
                                                <input id="referrer" name="referrer" className="form-input text-sm py-2 w-full"
                                                       type="text"
                                                       value={state.referrer} onChange={handleChange}
                                                       required/>
                                            </div>
                                            <div>
                                                <label className="block text-sm text-slate-400 font-medium mb-1"
                                                       htmlFor="message">
                                                    How can we help with? <span className="text-rose-500">*</span>
                                                </label>
                                                <textarea id="message" name="message"
                                                          className="form-textarea text-sm py-2 w-full" rows={4}
                                                          value={state.message} onChange={handleChange}
                                                          required/>
                                            </div>
                                            <div>
                                                <label className="block text-sm text-slate-400 font-medium mb-1"
                                                       htmlFor="about">
                                                    Tell Us About Yourself? <span className="text-rose-500">*</span>
                                                </label>
                                                <textarea id="about" name="about"
                                                          className="form-textarea text-sm py-2 w-full" rows={4}
                                                          value={state.about} onChange={handleChange}
                                                          required/>
                                            </div>
                                        </>
                                    }
                                </div>
                                {
                                    state.displaySuccess &&
                                    <div
                                        className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                                        role="alert">
                                        <p className="font-bold">Great Job!</p>
                                        <p className="text-sm">Stay tuned and we will get back to you soon</p>
                                    </div>
                                }

                                <div className="mt-6">
                                    <button
                                        className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                                        Submit{' '}
                                        <span
                                            className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                                    </button>
                                </div>
                            </form>
                            <MultiStepLoader loadingStates={LOADING_STATES} loading={!!loading}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}