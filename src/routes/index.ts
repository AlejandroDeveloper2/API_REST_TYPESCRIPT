import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/* Quitar el item.ts => item de los archivos del directorio actual */
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando  la ruta... /${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
