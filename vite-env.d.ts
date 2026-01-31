/// <reference types="vite/client" />

/**
 * Fix: Manually declare ImportMeta and ImportMetaEnv to resolve the "Cannot find type definition file" error
 * if the vite/client types are missing from the compiler's search path.
 */
interface ImportMetaEnv {
  readonly [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
