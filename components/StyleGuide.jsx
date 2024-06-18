'use client';

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

const StyleGuide = () => {
  const [date, setDate] = useState();
  return (
    <>
      {/* Tipografia  */}
      <div className="flex flex-col gap-y-4 p-24">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          labore ipsum accusantium. Officia aspernatur error quibusdam aliquam,
          odio tempora temporibus atque quas voluptates repellat eius?
        </p>
        <div className="bg-black p-24 flex flex-col gap-y-4">
          <Link href="/">Link</Link>
          <Button>Button 1</Button>
          <Button variant="orange">Button 2</Button>
          <Button variant="input">Button 3</Button>
          <Button variant="orange" size="sm">
            Button 4
          </Button>
          {/* label & Input  */}
          <div>
            <Label htmlFor="primernombre">Primer Nombre</Label>
            <Input type="primernombre" id="primernombre" />
          </div>
          <div>
            <Label htmlFor="primerapellido">Primer Apellido</Label>
            <Input type="primerapellido" id="primerapellido" />
          </div>
          {/*Calendario*/}
          <div>
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"input"}
                  className={cn("w-full justify-start text-left font-normal")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
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
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;
