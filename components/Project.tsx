"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export interface Project {
  project: ProjectElement;
  idx: number;
}

export interface ProjectElement {
  id: number;
  name: string;
  short_description: string;
  description: string;
  repository?: string;
  technologies: string[];
  resources: string[];
  contributors: Contributor[];
  demo?: string;
  "img-gif"?: string;
  img: string;
  desactivo?: Boolean;
}

export interface Contributor {
  username: string;
  profile: string;
}

export default function App(prop: Project) {
  return (
    <>
      <Card className=" group max-w-[400px]">
        <CardHeader className="flex">
          <p className="bg-white rounded-full mr-1 text-black">
            {prop.idx + 1}
          </p>
          <div className="flex flex-col">
            <p className="text-md">{prop.project.name}</p>
            <Link
              href={prop.project.demo}
              isExternal
              className="text-small link-hover link text-default-500 "
            >
              {prop.project.demo}
            </Link>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex justify-center items-center ">
          <Image
            isBlurred
            isZoomed
            width={240}
            src={prop.project.img}
            alt="NextUI Album Cover"
          />
          <p className="line-clamp-3 mt-2">{prop.project.short_description}</p>
        </CardBody>
        <Divider />
        <CardFooter className="bg-[#f5cb5c] duration-400 group-hover:bg-orange-600 text-black ">
          {prop.project.desactivo ? (
            <p className="mx-auto">No esta disponible el proyecto</p>
          ) : (
            <Link
              className="mx-auto"
              isExternal
              showAnchorIcon
              href={`/projects/${prop.project.id}`}
            >
              Ver mas del Proyecto
            </Link>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
