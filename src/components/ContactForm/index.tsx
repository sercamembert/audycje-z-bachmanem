"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
import { MessageIcon, PhoneIcon } from "../Svgs";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../Ui/use-toast";

export default function ContactFormHomePage() {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [companyName, setCompanyName] = useState<string | undefined>("");
  const [message, setMessage] = useState<string>("");
  const { toast } = useToast();
  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const { mutate: subscribe, isPending } = useMutation({
    mutationFn: async ({
      name,
      email,
      companyName,
      message,
    }: {
      name: string;
      email: string;
      companyName: string | undefined;
      message: string;
    }) => {
      const response = await fetch("/api/email", {
        body: JSON.stringify({
          name: name,
          email: email,
          companyName: companyName,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      return response.body;
    },
    onSuccess() {
      setStep(1);
      setName("");
      setEmail("");
      setCompanyName("");
      setMessage("");
      return toast({
        variant: "default",
        description: "Wiadomość wysłana pomyślnie",
      });
    },
    onError() {
      setStep(1);
      setName("");
      setEmail("");
      setCompanyName("");
      setMessage("");
      return toast({
        variant: "default",
        description: "Wystąpił błąd, wyślij jeszcze raz",
      });
    },
  });

  const handleButtonClick = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      subscribe({ name, email, companyName, message });
    }
  };

  const handlePreviousButtonClick = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handleCompanyNameChange = (value: string) => {
    setCompanyName(value);
  };
  const handleMessageChange = (value: string) => {
    setMessage(value);
  };

  return (
    <div className="flex flex-col lg:flex-row text-text gap-8 md:gap-10 lg:gap-[64.4px] xl:gap-[90px] desktop:gap-[100.6px] w-full h-full">
      <div className="flex flex-col w-full md:w-[90%] lg:w-[50%] lg:max-w-[400px] xl:max-w-[556px] desktop:max-w-[700px] gap-5 lg:gap-7 xl:gap-10 desktop:gap-12">
        <div className="flex flex-col">
          <p className=" text-lg md:text-sm xl:text-xl desktop:text-2xl">
            Chcesz, aby <q>Audycje z Bachmanem</q> odwiedziły Twoją szkołę,
            przedszkole lub specjalne wydarzenie? Skontaktuj się z nami, aby
            uzgodnić szczegóły i zarezerwować termin!
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xl md:text-base xl:text-2xl desktop:text-3xl mb-4 xl:mb-5 desktop:mb-6">
            Skontaktuj się z nami:
          </p>
          <div className="flex flex-col gap-3 xl:gap-4 desktop:gap-5">
            <Link
              href="callto:(+48) 507 171 517"
              className="bg-[#ad23af] max-w-max text-text flex items-center justify-center hover:scale-[1.02] ease-custom-bezier duration-500 gap-[8px] lg:gap-[5px] xl:gap-[6px] desktop:gap-[7px] px-[12px] lg:px-[14px] xl:px-[20px] desktop:px-[24px] py-[5px] lg:py-[6px] xl:py-[8px] desktop:py-[10px] rounded-[83px] lg:rounded-[60px] xl:rounded-[84px] desktop:rounded-[100px]"
            >
              <PhoneIcon className="size-[14px] xl:size-[19px] desktop:size-[22px]" />
              <p>(+48) 507 171 517</p>
            </Link>
            <Link
              href="mailto:kontakt@audycjezbachmanem.pl "
              className="bg-[#ad23af] max-w-max text-text flex items-center justify-center hover:scale-[1.02] ease-custom-bezier duration-500 gap-[8px] lg:gap-[5px] xl:gap-[6px] desktop:gap-[7px] px-[12px] lg:px-[14px] xl:px-[20px] desktop:px-[24px] py-[5px] lg:py-[6px] xl:py-[8px] desktop:py-[10px] rounded-[83px] lg:rounded-[60px] xl:rounded-[84px] desktop:rounded-[100px]"
            >
              <MessageIcon className="w-[18px] xl:w-6 desktop:w-[28px]" />
              <p>kontakt@audycjezbachmanem.pl</p>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col w-full md:w-[69%] lg:w-[40%] lg:border-l-2 border-text
        gap-[38px] md:gap-[30px] lg:gap-[28px] xl:gap-[34px] desktop:gap-[60px]
        pt-5 md:pt-0 lg:py-[11px] xl:py-[17px] desktop:py-[20px]
        lg:pl-[40px] xl:pl-[60px] desktop:pl-[75px]"
      >
        <h4 className="text-lg xl:text-2xl desktop:text-3xl">
          Formularz Kontaktowy
        </h4>
        {step === 1 ? (
          <>
            <div className="relative h-11 w-full">
              <input
                placeholder=""
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                className="peer h-full w-full border-b bg-transparent text-text transition-all border-text focus:outline-0 rounded-none
                text-[16px] md:text-[14px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] desktop:text-[21px]
                pt-4 pb-[19px] md:pb-[17px] lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] desktop:pb-[38px]"
                aria-labelledby="Imie"
                id="Imie"
              />
              <label
                className="after:content[''] pointer-events-none absolute left-0 flex h-full w-full
        -top-[20px] lg:-top-[9px] xl:-top-[25px] desktop:-top-[31px]
        select-none !overflow-visible truncate  leading-tight  transition-all 
        text-base lg:text-xs xl:text-lg desktop:text-xl
        peer-placeholder-shown:leading-[4.25] 
        peer-focus:leading-tight "
                htmlFor="Imie"
              >
                Imię i nazwisko
              </label>
            </div>
            <div className="relative h-11 w-full">
              <input
                placeholder=""
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className={`peer h-full w-full border-b bg-transparent text-text transition-all border-text focus:border-text focus:outline-0 rounded-none
                text-[16px] md:text-[14px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] desktop:text-[21px]
                pt-4 pb-[19px] md:pb-[17px] lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] desktop:pb-[38px]`}
                aria-labelledby="email"
                id="email"
              />
              <label
                className="after:content[''] pointer-events-none absolute left-0 flex h-full w-full
                -top-[20px] lg:-top-[9px] xl:-top-[25px] desktop:-top-[31px]
                select-none !overflow-visible truncate  leading-tight  transition-all 
              text-base lg:text-xs xl:text-lg desktop:text-xl
              peer-placeholder-shown:leading-[4.25] 
              peer-focus:leading-tight "
                htmlFor="email"
              >
                Adres e-mail
              </label>
            </div>
            <div className="relative h-11 w-full">
              <input
                placeholder=""
                value={companyName}
                onChange={(e) => handleCompanyNameChange(e.target.value)}
                className="peer h-full w-full border-b bg-transparent text-text transition-all border-text focus:border-text focus:outline-0 rounded-none
                ont-secondary text-[16px] md:text-[14px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] desktop:text-[21px]
                pt-4 pb-[19px] md:pb-[17px] lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] desktop:pb-[38px]"
                aria-labelledby="Instytucja"
                id="Instytucja"
              />
              <label
                className="after:content[''] pointer-events-none absolute left-0 flex h-full w-full
                -top-[20px] lg:-top-[9px] xl:-top-[25px] desktop:-top-[31px]
                select-none !overflow-visible truncate  leading-tight  transition-all 
                text-base lg:text-xs xl:text-lg desktop:text-xl
                peer-placeholder-shown:leading-[4.25] 
                peer-focus:leading-tight "
                htmlFor="Instytucja"
              >
                Nazwa instytucji &nbsp;
                <span className="opacity-80"> (opcjonalne)</span>
              </label>
            </div>
            <Button
              className="bg-text text-white hover:brightness-75 duration-300 w-fit disabled:opacity-60 disabled:hover:brightness-100 cursor-pointer"
              text="Napisz wiadomość"
              size="SMALL"
              variant="ARROW"
              props={{
                onClick: () => {
                  handleButtonClick();
                },
              }}
              disabled={
                name?.length === 0 ||
                email?.length === 0 ||
                !isEmailValid(email) ||
                isPending
              }
            />
          </>
        ) : (
          <>
            <div className="relative w-full">
              <textarea
                placeholder=""
                value={message}
                onChange={(e) => handleMessageChange(e.target.value)}
                className="peer resize-y h-full w-full border-b border-text bg-transparent text-text transition-all focus:border-text focus:outline-0 rounded-none
                 text-[16px] md:text-[14px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] desktop:text-[21px]
                pt-6 pb-[34px] md:pb-[28px] lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] desktop:pb-[50px]"
                aria-labelledby="Wiadomość"
                id="Wiadomosc"
              />
              <label
                htmlFor="Wiadomosc"
                className="after:content[''] pointer-events-none absolute left-0 flex h-full w-full
                -top-[14px] md:-top-[5px] lg:-top-[13px] xl:-top-[20px] 2xl:-top-[24px] desktop:-top-[31px]
                select-none !overflow-visible truncate leading-tight  transition-all 
                text-base lg:text-xs xl:text-lg desktop:text-xl
                peer-placeholder-shown:leading-[4.25] 
                peer-focus:leading-tight"
              >
                Twoja wiadomość
              </label>
            </div>
            <div className="flex justify-between">
              <button
                className="rounded-[50%] bg-text
                disabled:opacity-60 disabled:hover:brightness-100
                hover:brightness-75 duration-300 cursor-pointer"
                onClick={handlePreviousButtonClick}
                disabled={isPending}
              >
                <svg
                  className="w-4 lg:w-[14px] desktop:w-4 m-4 lg:m-[14px] xl:m-5 desktop:m-6"
                  viewBox="0 0 20 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25428 14.2377L1.51712 7.50052M1.51712 7.50052L8.25428 0.763367M1.51712 7.50052L19.4829 7.50053"
                    stroke="white"
                    stroke-width="1.54259"
                  />
                </svg>
              </button>
              <Button
                className="bg-text text-white w-fit disabled:opacity-60 cursor-pointer hover:brightness-75 duration-300 disabled:hover:brightness-100"
                text="Wyślij"
                size="SMALL"
                variant="ARROW"
                props={{
                  onClick: () => {
                    handleButtonClick();
                  },
                }}
                disabled={(message.length === 0 && true) || isPending}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
