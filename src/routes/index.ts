import { Router, Request, Response } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const removeExtension = (filename: string) => filename.split(".").shift();

readdirSync(PATH_ROUTER).forEach((fileName) => {
  // Get filename without extension so that we create the route
  const cleanName = removeExtension(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      // Here we're "mounting" the route. All other routes defined in the route handler
      // are relative to this route
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
