import { trackedBug } from "./tracked-bugs";
 
console.log(`Tracked bug: #${trackedBug.id}`);
console.log(`Creado: ${trackedBug.createdAt}`);
console.log(`Actualizado: ${trackedBug.updatedAt}`);

/*
HasTimestamp se diseña como un mixin: un tipo pequeño y reutilizable que se combina con otros mediante &.
TrackedBug necesita todas las propiedades de BugReport (id, title, severity, ...) y todas las de HasTimestamp. Si faltara una sola, TypeScript marcaría error.
Es el patrón natural para modelar entidades que vienen del backend con campos comunes (createdAt, updatedAt, id, ...) que se mezclan con datos específicos por dominio.
*/