"use client";

import * as React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ReservationForm = () => {
  const [date, setDate] = useState();
  return (
    <form className="flex flex-col gap-y-10">
      <div className="grid gap-[30px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label htmlFor="firstname">Nombre</Label>
            <Input id="firstname" type="text" />
          </div>
          <div>
            <Label htmlFor="lastname">Apellido</Label>
            <Input id="lastname" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          {/* calendario */}
          <div>
            <Label>Fecha</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"input"}
                  className={cn("w-full justify-start text-left font-normal")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Elije una Fecha</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* Seleccion */}
          <div>
            <Label>Personas</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Cuantas personas?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Personas</SelectLabel>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <Button className='uppercase w-full xl:w-auto xl:self-end'>Reservar</Button>
    </form>
  );
};

export default ReservationForm;
