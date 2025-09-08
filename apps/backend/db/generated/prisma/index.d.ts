
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Contest
 * 
 */
export type Contest = $Result.DefaultSelection<Prisma.$ContestPayload>
/**
 * Model ContestToChallengeMapping
 * 
 */
export type ContestToChallengeMapping = $Result.DefaultSelection<Prisma.$ContestToChallengeMappingPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model LeaderBoard
 * 
 */
export type LeaderBoard = $Result.DefaultSelection<Prisma.$LeaderBoardPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  User: 'User',
  Admin: 'Admin'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contest`: Exposes CRUD operations for the **Contest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contests
    * const contests = await prisma.contest.findMany()
    * ```
    */
  get contest(): Prisma.ContestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contestToChallengeMapping`: Exposes CRUD operations for the **ContestToChallengeMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContestToChallengeMappings
    * const contestToChallengeMappings = await prisma.contestToChallengeMapping.findMany()
    * ```
    */
  get contestToChallengeMapping(): Prisma.ContestToChallengeMappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderBoard`: Exposes CRUD operations for the **LeaderBoard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaderBoards
    * const leaderBoards = await prisma.leaderBoard.findMany()
    * ```
    */
  get leaderBoard(): Prisma.LeaderBoardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Contest: 'Contest',
    ContestToChallengeMapping: 'ContestToChallengeMapping',
    Challenge: 'Challenge',
    Submission: 'Submission',
    LeaderBoard: 'LeaderBoard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "contest" | "contestToChallengeMapping" | "challenge" | "submission" | "leaderBoard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Contest: {
        payload: Prisma.$ContestPayload<ExtArgs>
        fields: Prisma.ContestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findFirst: {
            args: Prisma.ContestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findMany: {
            args: Prisma.ContestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          create: {
            args: Prisma.ContestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          createMany: {
            args: Prisma.ContestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          delete: {
            args: Prisma.ContestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          update: {
            args: Prisma.ContestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          deleteMany: {
            args: Prisma.ContestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          upsert: {
            args: Prisma.ContestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          aggregate: {
            args: Prisma.ContestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContest>
          }
          groupBy: {
            args: Prisma.ContestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestCountArgs<ExtArgs>
            result: $Utils.Optional<ContestCountAggregateOutputType> | number
          }
        }
      }
      ContestToChallengeMapping: {
        payload: Prisma.$ContestToChallengeMappingPayload<ExtArgs>
        fields: Prisma.ContestToChallengeMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestToChallengeMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestToChallengeMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload>
          }
          findFirst: {
            args: Prisma.ContestToChallengeMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestToChallengeMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload>
          }
          findMany: {
            args: Prisma.ContestToChallengeMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload>[]
          }
          create: {
            args: Prisma.ContestToChallengeMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload>
          }
          createMany: {
            args: Prisma.ContestToChallengeMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContestToChallengeMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload>[]
          }
          delete: {
            args: Prisma.ContestToChallengeMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload>
          }
          update: {
            args: Prisma.ContestToChallengeMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload>
          }
          deleteMany: {
            args: Prisma.ContestToChallengeMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestToChallengeMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContestToChallengeMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload>[]
          }
          upsert: {
            args: Prisma.ContestToChallengeMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestToChallengeMappingPayload>
          }
          aggregate: {
            args: Prisma.ContestToChallengeMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContestToChallengeMapping>
          }
          groupBy: {
            args: Prisma.ContestToChallengeMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestToChallengeMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestToChallengeMappingCountArgs<ExtArgs>
            result: $Utils.Optional<ContestToChallengeMappingCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      LeaderBoard: {
        payload: Prisma.$LeaderBoardPayload<ExtArgs>
        fields: Prisma.LeaderBoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderBoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderBoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          findFirst: {
            args: Prisma.LeaderBoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderBoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          findMany: {
            args: Prisma.LeaderBoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>[]
          }
          create: {
            args: Prisma.LeaderBoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          createMany: {
            args: Prisma.LeaderBoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderBoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>[]
          }
          delete: {
            args: Prisma.LeaderBoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          update: {
            args: Prisma.LeaderBoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          deleteMany: {
            args: Prisma.LeaderBoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderBoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderBoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>[]
          }
          upsert: {
            args: Prisma.LeaderBoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          aggregate: {
            args: Prisma.LeaderBoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderBoard>
          }
          groupBy: {
            args: Prisma.LeaderBoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderBoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderBoardCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderBoardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    contest?: ContestOmit
    contestToChallengeMapping?: ContestToChallengeMappingOmit
    challenge?: ChallengeOmit
    submission?: SubmissionOmit
    leaderBoard?: LeaderBoardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leaderboard: number
    submissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaderboard?: boolean | UserCountOutputTypeCountLeaderboardArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaderboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderBoardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type ContestCountOutputType
   */

  export type ContestCountOutputType = {
    contestToChallengeMapping: number
    leaderboard: number
  }

  export type ContestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contestToChallengeMapping?: boolean | ContestCountOutputTypeCountContestToChallengeMappingArgs
    leaderboard?: boolean | ContestCountOutputTypeCountLeaderboardArgs
  }

  // Custom InputTypes
  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCountOutputType
     */
    select?: ContestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountContestToChallengeMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestToChallengeMappingWhereInput
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountLeaderboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderBoardWhereInput
  }


  /**
   * Count Type ContestToChallengeMappingCountOutputType
   */

  export type ContestToChallengeMappingCountOutputType = {
    submissions: number
  }

  export type ContestToChallengeMappingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ContestToChallengeMappingCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * ContestToChallengeMappingCountOutputType without action
   */
  export type ContestToChallengeMappingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMappingCountOutputType
     */
    select?: ContestToChallengeMappingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContestToChallengeMappingCountOutputType without action
   */
  export type ContestToChallengeMappingCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    contestToChallengeMapping: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contestToChallengeMapping?: boolean | ChallengeCountOutputTypeCountContestToChallengeMappingArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountContestToChallengeMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestToChallengeMappingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    leaderboard?: boolean | User$leaderboardArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaderboard?: boolean | User$leaderboardArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      leaderboard: Prisma.$LeaderBoardPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leaderboard<T extends User$leaderboardArgs<ExtArgs> = {}>(args?: Subset<T, User$leaderboardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.leaderboard
   */
  export type User$leaderboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    where?: LeaderBoardWhereInput
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    cursor?: LeaderBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Contest
   */

  export type AggregateContest = {
    _count: ContestCountAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  export type ContestMinAggregateOutputType = {
    id: string | null
    title: string | null
    startTime: Date | null
  }

  export type ContestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    startTime: Date | null
  }

  export type ContestCountAggregateOutputType = {
    id: number
    title: number
    startTime: number
    _all: number
  }


  export type ContestMinAggregateInputType = {
    id?: true
    title?: true
    startTime?: true
  }

  export type ContestMaxAggregateInputType = {
    id?: true
    title?: true
    startTime?: true
  }

  export type ContestCountAggregateInputType = {
    id?: true
    title?: true
    startTime?: true
    _all?: true
  }

  export type ContestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contest to aggregate.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contests
    **/
    _count?: true | ContestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestMaxAggregateInputType
  }

  export type GetContestAggregateType<T extends ContestAggregateArgs> = {
        [P in keyof T & keyof AggregateContest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContest[P]>
      : GetScalarType<T[P], AggregateContest[P]>
  }




  export type ContestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestWhereInput
    orderBy?: ContestOrderByWithAggregationInput | ContestOrderByWithAggregationInput[]
    by: ContestScalarFieldEnum[] | ContestScalarFieldEnum
    having?: ContestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestCountAggregateInputType | true
    _min?: ContestMinAggregateInputType
    _max?: ContestMaxAggregateInputType
  }

  export type ContestGroupByOutputType = {
    id: string
    title: string
    startTime: Date
    _count: ContestCountAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  type GetContestGroupByPayload<T extends ContestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestGroupByOutputType[P]>
            : GetScalarType<T[P], ContestGroupByOutputType[P]>
        }
      >
    >


  export type ContestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startTime?: boolean
    contestToChallengeMapping?: boolean | Contest$contestToChallengeMappingArgs<ExtArgs>
    leaderboard?: boolean | Contest$leaderboardArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contest"]>

  export type ContestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startTime?: boolean
  }, ExtArgs["result"]["contest"]>

  export type ContestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startTime?: boolean
  }, ExtArgs["result"]["contest"]>

  export type ContestSelectScalar = {
    id?: boolean
    title?: boolean
    startTime?: boolean
  }

  export type ContestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "startTime", ExtArgs["result"]["contest"]>
  export type ContestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contestToChallengeMapping?: boolean | Contest$contestToChallengeMappingArgs<ExtArgs>
    leaderboard?: boolean | Contest$leaderboardArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contest"
    objects: {
      contestToChallengeMapping: Prisma.$ContestToChallengeMappingPayload<ExtArgs>[]
      leaderboard: Prisma.$LeaderBoardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      startTime: Date
    }, ExtArgs["result"]["contest"]>
    composites: {}
  }

  type ContestGetPayload<S extends boolean | null | undefined | ContestDefaultArgs> = $Result.GetResult<Prisma.$ContestPayload, S>

  type ContestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestCountAggregateInputType | true
    }

  export interface ContestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contest'], meta: { name: 'Contest' } }
    /**
     * Find zero or one Contest that matches the filter.
     * @param {ContestFindUniqueArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestFindUniqueArgs>(args: SelectSubset<T, ContestFindUniqueArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestFindUniqueOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestFindFirstArgs>(args?: SelectSubset<T, ContestFindFirstArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contests
     * const contests = await prisma.contest.findMany()
     * 
     * // Get first 10 Contests
     * const contests = await prisma.contest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestWithIdOnly = await prisma.contest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestFindManyArgs>(args?: SelectSubset<T, ContestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contest.
     * @param {ContestCreateArgs} args - Arguments to create a Contest.
     * @example
     * // Create one Contest
     * const Contest = await prisma.contest.create({
     *   data: {
     *     // ... data to create a Contest
     *   }
     * })
     * 
     */
    create<T extends ContestCreateArgs>(args: SelectSubset<T, ContestCreateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contests.
     * @param {ContestCreateManyArgs} args - Arguments to create many Contests.
     * @example
     * // Create many Contests
     * const contest = await prisma.contest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestCreateManyArgs>(args?: SelectSubset<T, ContestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contests and returns the data saved in the database.
     * @param {ContestCreateManyAndReturnArgs} args - Arguments to create many Contests.
     * @example
     * // Create many Contests
     * const contest = await prisma.contest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contests and only return the `id`
     * const contestWithIdOnly = await prisma.contest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContestCreateManyAndReturnArgs>(args?: SelectSubset<T, ContestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contest.
     * @param {ContestDeleteArgs} args - Arguments to delete one Contest.
     * @example
     * // Delete one Contest
     * const Contest = await prisma.contest.delete({
     *   where: {
     *     // ... filter to delete one Contest
     *   }
     * })
     * 
     */
    delete<T extends ContestDeleteArgs>(args: SelectSubset<T, ContestDeleteArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contest.
     * @param {ContestUpdateArgs} args - Arguments to update one Contest.
     * @example
     * // Update one Contest
     * const contest = await prisma.contest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestUpdateArgs>(args: SelectSubset<T, ContestUpdateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contests.
     * @param {ContestDeleteManyArgs} args - Arguments to filter Contests to delete.
     * @example
     * // Delete a few Contests
     * const { count } = await prisma.contest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestDeleteManyArgs>(args?: SelectSubset<T, ContestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contests
     * const contest = await prisma.contest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestUpdateManyArgs>(args: SelectSubset<T, ContestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contests and returns the data updated in the database.
     * @param {ContestUpdateManyAndReturnArgs} args - Arguments to update many Contests.
     * @example
     * // Update many Contests
     * const contest = await prisma.contest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contests and only return the `id`
     * const contestWithIdOnly = await prisma.contest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContestUpdateManyAndReturnArgs>(args: SelectSubset<T, ContestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contest.
     * @param {ContestUpsertArgs} args - Arguments to update or create a Contest.
     * @example
     * // Update or create a Contest
     * const contest = await prisma.contest.upsert({
     *   create: {
     *     // ... data to create a Contest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contest we want to update
     *   }
     * })
     */
    upsert<T extends ContestUpsertArgs>(args: SelectSubset<T, ContestUpsertArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCountArgs} args - Arguments to filter Contests to count.
     * @example
     * // Count the number of Contests
     * const count = await prisma.contest.count({
     *   where: {
     *     // ... the filter for the Contests we want to count
     *   }
     * })
    **/
    count<T extends ContestCountArgs>(
      args?: Subset<T, ContestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestAggregateArgs>(args: Subset<T, ContestAggregateArgs>): Prisma.PrismaPromise<GetContestAggregateType<T>>

    /**
     * Group by Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestGroupByArgs['orderBy'] }
        : { orderBy?: ContestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contest model
   */
  readonly fields: ContestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contestToChallengeMapping<T extends Contest$contestToChallengeMappingArgs<ExtArgs> = {}>(args?: Subset<T, Contest$contestToChallengeMappingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboard<T extends Contest$leaderboardArgs<ExtArgs> = {}>(args?: Subset<T, Contest$leaderboardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contest model
   */
  interface ContestFieldRefs {
    readonly id: FieldRef<"Contest", 'String'>
    readonly title: FieldRef<"Contest", 'String'>
    readonly startTime: FieldRef<"Contest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contest findUnique
   */
  export type ContestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findUniqueOrThrow
   */
  export type ContestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findFirst
   */
  export type ContestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findFirstOrThrow
   */
  export type ContestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findMany
   */
  export type ContestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contests to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest create
   */
  export type ContestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to create a Contest.
     */
    data: XOR<ContestCreateInput, ContestUncheckedCreateInput>
  }

  /**
   * Contest createMany
   */
  export type ContestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contests.
     */
    data: ContestCreateManyInput | ContestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contest createManyAndReturn
   */
  export type ContestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * The data used to create many Contests.
     */
    data: ContestCreateManyInput | ContestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contest update
   */
  export type ContestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to update a Contest.
     */
    data: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
    /**
     * Choose, which Contest to update.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest updateMany
   */
  export type ContestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contests.
     */
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyInput>
    /**
     * Filter which Contests to update
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to update.
     */
    limit?: number
  }

  /**
   * Contest updateManyAndReturn
   */
  export type ContestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * The data used to update Contests.
     */
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyInput>
    /**
     * Filter which Contests to update
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to update.
     */
    limit?: number
  }

  /**
   * Contest upsert
   */
  export type ContestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The filter to search for the Contest to update in case it exists.
     */
    where: ContestWhereUniqueInput
    /**
     * In case the Contest found by the `where` argument doesn't exist, create a new Contest with this data.
     */
    create: XOR<ContestCreateInput, ContestUncheckedCreateInput>
    /**
     * In case the Contest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
  }

  /**
   * Contest delete
   */
  export type ContestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter which Contest to delete.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest deleteMany
   */
  export type ContestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contests to delete
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to delete.
     */
    limit?: number
  }

  /**
   * Contest.contestToChallengeMapping
   */
  export type Contest$contestToChallengeMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    where?: ContestToChallengeMappingWhereInput
    orderBy?: ContestToChallengeMappingOrderByWithRelationInput | ContestToChallengeMappingOrderByWithRelationInput[]
    cursor?: ContestToChallengeMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestToChallengeMappingScalarFieldEnum | ContestToChallengeMappingScalarFieldEnum[]
  }

  /**
   * Contest.leaderboard
   */
  export type Contest$leaderboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    where?: LeaderBoardWhereInput
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    cursor?: LeaderBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * Contest without action
   */
  export type ContestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
  }


  /**
   * Model ContestToChallengeMapping
   */

  export type AggregateContestToChallengeMapping = {
    _count: ContestToChallengeMappingCountAggregateOutputType | null
    _avg: ContestToChallengeMappingAvgAggregateOutputType | null
    _sum: ContestToChallengeMappingSumAggregateOutputType | null
    _min: ContestToChallengeMappingMinAggregateOutputType | null
    _max: ContestToChallengeMappingMaxAggregateOutputType | null
  }

  export type ContestToChallengeMappingAvgAggregateOutputType = {
    index: number | null
  }

  export type ContestToChallengeMappingSumAggregateOutputType = {
    index: number | null
  }

  export type ContestToChallengeMappingMinAggregateOutputType = {
    id: string | null
    contestId: string | null
    challengeId: string | null
    index: number | null
  }

  export type ContestToChallengeMappingMaxAggregateOutputType = {
    id: string | null
    contestId: string | null
    challengeId: string | null
    index: number | null
  }

  export type ContestToChallengeMappingCountAggregateOutputType = {
    id: number
    contestId: number
    challengeId: number
    index: number
    _all: number
  }


  export type ContestToChallengeMappingAvgAggregateInputType = {
    index?: true
  }

  export type ContestToChallengeMappingSumAggregateInputType = {
    index?: true
  }

  export type ContestToChallengeMappingMinAggregateInputType = {
    id?: true
    contestId?: true
    challengeId?: true
    index?: true
  }

  export type ContestToChallengeMappingMaxAggregateInputType = {
    id?: true
    contestId?: true
    challengeId?: true
    index?: true
  }

  export type ContestToChallengeMappingCountAggregateInputType = {
    id?: true
    contestId?: true
    challengeId?: true
    index?: true
    _all?: true
  }

  export type ContestToChallengeMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestToChallengeMapping to aggregate.
     */
    where?: ContestToChallengeMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestToChallengeMappings to fetch.
     */
    orderBy?: ContestToChallengeMappingOrderByWithRelationInput | ContestToChallengeMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestToChallengeMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestToChallengeMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestToChallengeMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContestToChallengeMappings
    **/
    _count?: true | ContestToChallengeMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContestToChallengeMappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContestToChallengeMappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestToChallengeMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestToChallengeMappingMaxAggregateInputType
  }

  export type GetContestToChallengeMappingAggregateType<T extends ContestToChallengeMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateContestToChallengeMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContestToChallengeMapping[P]>
      : GetScalarType<T[P], AggregateContestToChallengeMapping[P]>
  }




  export type ContestToChallengeMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestToChallengeMappingWhereInput
    orderBy?: ContestToChallengeMappingOrderByWithAggregationInput | ContestToChallengeMappingOrderByWithAggregationInput[]
    by: ContestToChallengeMappingScalarFieldEnum[] | ContestToChallengeMappingScalarFieldEnum
    having?: ContestToChallengeMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestToChallengeMappingCountAggregateInputType | true
    _avg?: ContestToChallengeMappingAvgAggregateInputType
    _sum?: ContestToChallengeMappingSumAggregateInputType
    _min?: ContestToChallengeMappingMinAggregateInputType
    _max?: ContestToChallengeMappingMaxAggregateInputType
  }

  export type ContestToChallengeMappingGroupByOutputType = {
    id: string
    contestId: string
    challengeId: string
    index: number
    _count: ContestToChallengeMappingCountAggregateOutputType | null
    _avg: ContestToChallengeMappingAvgAggregateOutputType | null
    _sum: ContestToChallengeMappingSumAggregateOutputType | null
    _min: ContestToChallengeMappingMinAggregateOutputType | null
    _max: ContestToChallengeMappingMaxAggregateOutputType | null
  }

  type GetContestToChallengeMappingGroupByPayload<T extends ContestToChallengeMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestToChallengeMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestToChallengeMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestToChallengeMappingGroupByOutputType[P]>
            : GetScalarType<T[P], ContestToChallengeMappingGroupByOutputType[P]>
        }
      >
    >


  export type ContestToChallengeMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    challengeId?: boolean
    index?: boolean
    contests?: boolean | ContestDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    submissions?: boolean | ContestToChallengeMapping$submissionsArgs<ExtArgs>
    _count?: boolean | ContestToChallengeMappingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestToChallengeMapping"]>

  export type ContestToChallengeMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    challengeId?: boolean
    index?: boolean
    contests?: boolean | ContestDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestToChallengeMapping"]>

  export type ContestToChallengeMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    challengeId?: boolean
    index?: boolean
    contests?: boolean | ContestDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestToChallengeMapping"]>

  export type ContestToChallengeMappingSelectScalar = {
    id?: boolean
    contestId?: boolean
    challengeId?: boolean
    index?: boolean
  }

  export type ContestToChallengeMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contestId" | "challengeId" | "index", ExtArgs["result"]["contestToChallengeMapping"]>
  export type ContestToChallengeMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contests?: boolean | ContestDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    submissions?: boolean | ContestToChallengeMapping$submissionsArgs<ExtArgs>
    _count?: boolean | ContestToChallengeMappingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContestToChallengeMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contests?: boolean | ContestDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type ContestToChallengeMappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contests?: boolean | ContestDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $ContestToChallengeMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContestToChallengeMapping"
    objects: {
      contests: Prisma.$ContestPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contestId: string
      challengeId: string
      index: number
    }, ExtArgs["result"]["contestToChallengeMapping"]>
    composites: {}
  }

  type ContestToChallengeMappingGetPayload<S extends boolean | null | undefined | ContestToChallengeMappingDefaultArgs> = $Result.GetResult<Prisma.$ContestToChallengeMappingPayload, S>

  type ContestToChallengeMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestToChallengeMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestToChallengeMappingCountAggregateInputType | true
    }

  export interface ContestToChallengeMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContestToChallengeMapping'], meta: { name: 'ContestToChallengeMapping' } }
    /**
     * Find zero or one ContestToChallengeMapping that matches the filter.
     * @param {ContestToChallengeMappingFindUniqueArgs} args - Arguments to find a ContestToChallengeMapping
     * @example
     * // Get one ContestToChallengeMapping
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestToChallengeMappingFindUniqueArgs>(args: SelectSubset<T, ContestToChallengeMappingFindUniqueArgs<ExtArgs>>): Prisma__ContestToChallengeMappingClient<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContestToChallengeMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestToChallengeMappingFindUniqueOrThrowArgs} args - Arguments to find a ContestToChallengeMapping
     * @example
     * // Get one ContestToChallengeMapping
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestToChallengeMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestToChallengeMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestToChallengeMappingClient<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestToChallengeMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestToChallengeMappingFindFirstArgs} args - Arguments to find a ContestToChallengeMapping
     * @example
     * // Get one ContestToChallengeMapping
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestToChallengeMappingFindFirstArgs>(args?: SelectSubset<T, ContestToChallengeMappingFindFirstArgs<ExtArgs>>): Prisma__ContestToChallengeMappingClient<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestToChallengeMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestToChallengeMappingFindFirstOrThrowArgs} args - Arguments to find a ContestToChallengeMapping
     * @example
     * // Get one ContestToChallengeMapping
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestToChallengeMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestToChallengeMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestToChallengeMappingClient<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContestToChallengeMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestToChallengeMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContestToChallengeMappings
     * const contestToChallengeMappings = await prisma.contestToChallengeMapping.findMany()
     * 
     * // Get first 10 ContestToChallengeMappings
     * const contestToChallengeMappings = await prisma.contestToChallengeMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestToChallengeMappingWithIdOnly = await prisma.contestToChallengeMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestToChallengeMappingFindManyArgs>(args?: SelectSubset<T, ContestToChallengeMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContestToChallengeMapping.
     * @param {ContestToChallengeMappingCreateArgs} args - Arguments to create a ContestToChallengeMapping.
     * @example
     * // Create one ContestToChallengeMapping
     * const ContestToChallengeMapping = await prisma.contestToChallengeMapping.create({
     *   data: {
     *     // ... data to create a ContestToChallengeMapping
     *   }
     * })
     * 
     */
    create<T extends ContestToChallengeMappingCreateArgs>(args: SelectSubset<T, ContestToChallengeMappingCreateArgs<ExtArgs>>): Prisma__ContestToChallengeMappingClient<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContestToChallengeMappings.
     * @param {ContestToChallengeMappingCreateManyArgs} args - Arguments to create many ContestToChallengeMappings.
     * @example
     * // Create many ContestToChallengeMappings
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestToChallengeMappingCreateManyArgs>(args?: SelectSubset<T, ContestToChallengeMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContestToChallengeMappings and returns the data saved in the database.
     * @param {ContestToChallengeMappingCreateManyAndReturnArgs} args - Arguments to create many ContestToChallengeMappings.
     * @example
     * // Create many ContestToChallengeMappings
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContestToChallengeMappings and only return the `id`
     * const contestToChallengeMappingWithIdOnly = await prisma.contestToChallengeMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContestToChallengeMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, ContestToChallengeMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContestToChallengeMapping.
     * @param {ContestToChallengeMappingDeleteArgs} args - Arguments to delete one ContestToChallengeMapping.
     * @example
     * // Delete one ContestToChallengeMapping
     * const ContestToChallengeMapping = await prisma.contestToChallengeMapping.delete({
     *   where: {
     *     // ... filter to delete one ContestToChallengeMapping
     *   }
     * })
     * 
     */
    delete<T extends ContestToChallengeMappingDeleteArgs>(args: SelectSubset<T, ContestToChallengeMappingDeleteArgs<ExtArgs>>): Prisma__ContestToChallengeMappingClient<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContestToChallengeMapping.
     * @param {ContestToChallengeMappingUpdateArgs} args - Arguments to update one ContestToChallengeMapping.
     * @example
     * // Update one ContestToChallengeMapping
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestToChallengeMappingUpdateArgs>(args: SelectSubset<T, ContestToChallengeMappingUpdateArgs<ExtArgs>>): Prisma__ContestToChallengeMappingClient<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContestToChallengeMappings.
     * @param {ContestToChallengeMappingDeleteManyArgs} args - Arguments to filter ContestToChallengeMappings to delete.
     * @example
     * // Delete a few ContestToChallengeMappings
     * const { count } = await prisma.contestToChallengeMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestToChallengeMappingDeleteManyArgs>(args?: SelectSubset<T, ContestToChallengeMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestToChallengeMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestToChallengeMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContestToChallengeMappings
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestToChallengeMappingUpdateManyArgs>(args: SelectSubset<T, ContestToChallengeMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestToChallengeMappings and returns the data updated in the database.
     * @param {ContestToChallengeMappingUpdateManyAndReturnArgs} args - Arguments to update many ContestToChallengeMappings.
     * @example
     * // Update many ContestToChallengeMappings
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContestToChallengeMappings and only return the `id`
     * const contestToChallengeMappingWithIdOnly = await prisma.contestToChallengeMapping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContestToChallengeMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, ContestToChallengeMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContestToChallengeMapping.
     * @param {ContestToChallengeMappingUpsertArgs} args - Arguments to update or create a ContestToChallengeMapping.
     * @example
     * // Update or create a ContestToChallengeMapping
     * const contestToChallengeMapping = await prisma.contestToChallengeMapping.upsert({
     *   create: {
     *     // ... data to create a ContestToChallengeMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContestToChallengeMapping we want to update
     *   }
     * })
     */
    upsert<T extends ContestToChallengeMappingUpsertArgs>(args: SelectSubset<T, ContestToChallengeMappingUpsertArgs<ExtArgs>>): Prisma__ContestToChallengeMappingClient<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContestToChallengeMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestToChallengeMappingCountArgs} args - Arguments to filter ContestToChallengeMappings to count.
     * @example
     * // Count the number of ContestToChallengeMappings
     * const count = await prisma.contestToChallengeMapping.count({
     *   where: {
     *     // ... the filter for the ContestToChallengeMappings we want to count
     *   }
     * })
    **/
    count<T extends ContestToChallengeMappingCountArgs>(
      args?: Subset<T, ContestToChallengeMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestToChallengeMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContestToChallengeMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestToChallengeMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestToChallengeMappingAggregateArgs>(args: Subset<T, ContestToChallengeMappingAggregateArgs>): Prisma.PrismaPromise<GetContestToChallengeMappingAggregateType<T>>

    /**
     * Group by ContestToChallengeMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestToChallengeMappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestToChallengeMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestToChallengeMappingGroupByArgs['orderBy'] }
        : { orderBy?: ContestToChallengeMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestToChallengeMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestToChallengeMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContestToChallengeMapping model
   */
  readonly fields: ContestToChallengeMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContestToChallengeMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestToChallengeMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contests<T extends ContestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestDefaultArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends ContestToChallengeMapping$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, ContestToChallengeMapping$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContestToChallengeMapping model
   */
  interface ContestToChallengeMappingFieldRefs {
    readonly id: FieldRef<"ContestToChallengeMapping", 'String'>
    readonly contestId: FieldRef<"ContestToChallengeMapping", 'String'>
    readonly challengeId: FieldRef<"ContestToChallengeMapping", 'String'>
    readonly index: FieldRef<"ContestToChallengeMapping", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContestToChallengeMapping findUnique
   */
  export type ContestToChallengeMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    /**
     * Filter, which ContestToChallengeMapping to fetch.
     */
    where: ContestToChallengeMappingWhereUniqueInput
  }

  /**
   * ContestToChallengeMapping findUniqueOrThrow
   */
  export type ContestToChallengeMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    /**
     * Filter, which ContestToChallengeMapping to fetch.
     */
    where: ContestToChallengeMappingWhereUniqueInput
  }

  /**
   * ContestToChallengeMapping findFirst
   */
  export type ContestToChallengeMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    /**
     * Filter, which ContestToChallengeMapping to fetch.
     */
    where?: ContestToChallengeMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestToChallengeMappings to fetch.
     */
    orderBy?: ContestToChallengeMappingOrderByWithRelationInput | ContestToChallengeMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestToChallengeMappings.
     */
    cursor?: ContestToChallengeMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestToChallengeMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestToChallengeMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestToChallengeMappings.
     */
    distinct?: ContestToChallengeMappingScalarFieldEnum | ContestToChallengeMappingScalarFieldEnum[]
  }

  /**
   * ContestToChallengeMapping findFirstOrThrow
   */
  export type ContestToChallengeMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    /**
     * Filter, which ContestToChallengeMapping to fetch.
     */
    where?: ContestToChallengeMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestToChallengeMappings to fetch.
     */
    orderBy?: ContestToChallengeMappingOrderByWithRelationInput | ContestToChallengeMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestToChallengeMappings.
     */
    cursor?: ContestToChallengeMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestToChallengeMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestToChallengeMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestToChallengeMappings.
     */
    distinct?: ContestToChallengeMappingScalarFieldEnum | ContestToChallengeMappingScalarFieldEnum[]
  }

  /**
   * ContestToChallengeMapping findMany
   */
  export type ContestToChallengeMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    /**
     * Filter, which ContestToChallengeMappings to fetch.
     */
    where?: ContestToChallengeMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestToChallengeMappings to fetch.
     */
    orderBy?: ContestToChallengeMappingOrderByWithRelationInput | ContestToChallengeMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContestToChallengeMappings.
     */
    cursor?: ContestToChallengeMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestToChallengeMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestToChallengeMappings.
     */
    skip?: number
    distinct?: ContestToChallengeMappingScalarFieldEnum | ContestToChallengeMappingScalarFieldEnum[]
  }

  /**
   * ContestToChallengeMapping create
   */
  export type ContestToChallengeMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a ContestToChallengeMapping.
     */
    data: XOR<ContestToChallengeMappingCreateInput, ContestToChallengeMappingUncheckedCreateInput>
  }

  /**
   * ContestToChallengeMapping createMany
   */
  export type ContestToChallengeMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContestToChallengeMappings.
     */
    data: ContestToChallengeMappingCreateManyInput | ContestToChallengeMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContestToChallengeMapping createManyAndReturn
   */
  export type ContestToChallengeMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * The data used to create many ContestToChallengeMappings.
     */
    data: ContestToChallengeMappingCreateManyInput | ContestToChallengeMappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestToChallengeMapping update
   */
  export type ContestToChallengeMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a ContestToChallengeMapping.
     */
    data: XOR<ContestToChallengeMappingUpdateInput, ContestToChallengeMappingUncheckedUpdateInput>
    /**
     * Choose, which ContestToChallengeMapping to update.
     */
    where: ContestToChallengeMappingWhereUniqueInput
  }

  /**
   * ContestToChallengeMapping updateMany
   */
  export type ContestToChallengeMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContestToChallengeMappings.
     */
    data: XOR<ContestToChallengeMappingUpdateManyMutationInput, ContestToChallengeMappingUncheckedUpdateManyInput>
    /**
     * Filter which ContestToChallengeMappings to update
     */
    where?: ContestToChallengeMappingWhereInput
    /**
     * Limit how many ContestToChallengeMappings to update.
     */
    limit?: number
  }

  /**
   * ContestToChallengeMapping updateManyAndReturn
   */
  export type ContestToChallengeMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * The data used to update ContestToChallengeMappings.
     */
    data: XOR<ContestToChallengeMappingUpdateManyMutationInput, ContestToChallengeMappingUncheckedUpdateManyInput>
    /**
     * Filter which ContestToChallengeMappings to update
     */
    where?: ContestToChallengeMappingWhereInput
    /**
     * Limit how many ContestToChallengeMappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestToChallengeMapping upsert
   */
  export type ContestToChallengeMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the ContestToChallengeMapping to update in case it exists.
     */
    where: ContestToChallengeMappingWhereUniqueInput
    /**
     * In case the ContestToChallengeMapping found by the `where` argument doesn't exist, create a new ContestToChallengeMapping with this data.
     */
    create: XOR<ContestToChallengeMappingCreateInput, ContestToChallengeMappingUncheckedCreateInput>
    /**
     * In case the ContestToChallengeMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestToChallengeMappingUpdateInput, ContestToChallengeMappingUncheckedUpdateInput>
  }

  /**
   * ContestToChallengeMapping delete
   */
  export type ContestToChallengeMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    /**
     * Filter which ContestToChallengeMapping to delete.
     */
    where: ContestToChallengeMappingWhereUniqueInput
  }

  /**
   * ContestToChallengeMapping deleteMany
   */
  export type ContestToChallengeMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestToChallengeMappings to delete
     */
    where?: ContestToChallengeMappingWhereInput
    /**
     * Limit how many ContestToChallengeMappings to delete.
     */
    limit?: number
  }

  /**
   * ContestToChallengeMapping.submissions
   */
  export type ContestToChallengeMapping$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * ContestToChallengeMapping without action
   */
  export type ContestToChallengeMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    maxPoints: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    maxPoints: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    title: string | null
    notionDocId: string | null
    contestId: string | null
    maxPoints: number | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    notionDocId: string | null
    contestId: string | null
    maxPoints: number | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    title: number
    notionDocId: number
    contestId: number
    maxPoints: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    maxPoints?: true
  }

  export type ChallengeSumAggregateInputType = {
    maxPoints?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    title?: true
    notionDocId?: true
    contestId?: true
    maxPoints?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    notionDocId?: true
    contestId?: true
    maxPoints?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    title?: true
    notionDocId?: true
    contestId?: true
    maxPoints?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    title: string
    notionDocId: string
    contestId: string
    maxPoints: number
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    notionDocId?: boolean
    contestId?: boolean
    maxPoints?: boolean
    contestToChallengeMapping?: boolean | Challenge$contestToChallengeMappingArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    notionDocId?: boolean
    contestId?: boolean
    maxPoints?: boolean
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    notionDocId?: boolean
    contestId?: boolean
    maxPoints?: boolean
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    notionDocId?: boolean
    contestId?: boolean
    maxPoints?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "notionDocId" | "contestId" | "maxPoints", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contestToChallengeMapping?: boolean | Challenge$contestToChallengeMappingArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      contestToChallengeMapping: Prisma.$ContestToChallengeMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      notionDocId: string
      contestId: string
      maxPoints: number
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contestToChallengeMapping<T extends Challenge$contestToChallengeMappingArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$contestToChallengeMappingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'String'>
    readonly title: FieldRef<"Challenge", 'String'>
    readonly notionDocId: FieldRef<"Challenge", 'String'>
    readonly contestId: FieldRef<"Challenge", 'String'>
    readonly maxPoints: FieldRef<"Challenge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge.contestToChallengeMapping
   */
  export type Challenge$contestToChallengeMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestToChallengeMapping
     */
    select?: ContestToChallengeMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestToChallengeMapping
     */
    omit?: ContestToChallengeMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestToChallengeMappingInclude<ExtArgs> | null
    where?: ContestToChallengeMappingWhereInput
    orderBy?: ContestToChallengeMappingOrderByWithRelationInput | ContestToChallengeMappingOrderByWithRelationInput[]
    cursor?: ContestToChallengeMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestToChallengeMappingScalarFieldEnum | ContestToChallengeMappingScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    points: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    points: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    submissions: string | null
    userId: string | null
    contestToChallengeMappingId: string | null
    points: number | null
    createdAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    submissions: string | null
    userId: string | null
    contestToChallengeMappingId: string | null
    points: number | null
    createdAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    submissions: number
    userId: number
    contestToChallengeMappingId: number
    points: number
    createdAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    points?: true
  }

  export type SubmissionSumAggregateInputType = {
    points?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    submissions?: true
    userId?: true
    contestToChallengeMappingId?: true
    points?: true
    createdAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    submissions?: true
    userId?: true
    contestToChallengeMappingId?: true
    points?: true
    createdAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    submissions?: true
    userId?: true
    contestToChallengeMappingId?: true
    points?: true
    createdAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    submissions: string
    userId: string
    contestToChallengeMappingId: string
    points: number
    createdAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissions?: boolean
    userId?: boolean
    contestToChallengeMappingId?: boolean
    points?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contestToChallengeMapping?: boolean | ContestToChallengeMappingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissions?: boolean
    userId?: boolean
    contestToChallengeMappingId?: boolean
    points?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contestToChallengeMapping?: boolean | ContestToChallengeMappingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissions?: boolean
    userId?: boolean
    contestToChallengeMappingId?: boolean
    points?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contestToChallengeMapping?: boolean | ContestToChallengeMappingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    submissions?: boolean
    userId?: boolean
    contestToChallengeMappingId?: boolean
    points?: boolean
    createdAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissions" | "userId" | "contestToChallengeMappingId" | "points" | "createdAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contestToChallengeMapping?: boolean | ContestToChallengeMappingDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contestToChallengeMapping?: boolean | ContestToChallengeMappingDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contestToChallengeMapping?: boolean | ContestToChallengeMappingDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contestToChallengeMapping: Prisma.$ContestToChallengeMappingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissions: string
      userId: string
      contestToChallengeMappingId: string
      points: number
      createdAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contestToChallengeMapping<T extends ContestToChallengeMappingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestToChallengeMappingDefaultArgs<ExtArgs>>): Prisma__ContestToChallengeMappingClient<$Result.GetResult<Prisma.$ContestToChallengeMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly submissions: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly contestToChallengeMappingId: FieldRef<"Submission", 'String'>
    readonly points: FieldRef<"Submission", 'Int'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model LeaderBoard
   */

  export type AggregateLeaderBoard = {
    _count: LeaderBoardCountAggregateOutputType | null
    _avg: LeaderBoardAvgAggregateOutputType | null
    _sum: LeaderBoardSumAggregateOutputType | null
    _min: LeaderBoardMinAggregateOutputType | null
    _max: LeaderBoardMaxAggregateOutputType | null
  }

  export type LeaderBoardAvgAggregateOutputType = {
    rank: number | null
  }

  export type LeaderBoardSumAggregateOutputType = {
    rank: number | null
  }

  export type LeaderBoardMinAggregateOutputType = {
    id: string | null
    contestId: string | null
    userId: string | null
    rank: number | null
  }

  export type LeaderBoardMaxAggregateOutputType = {
    id: string | null
    contestId: string | null
    userId: string | null
    rank: number | null
  }

  export type LeaderBoardCountAggregateOutputType = {
    id: number
    contestId: number
    userId: number
    rank: number
    _all: number
  }


  export type LeaderBoardAvgAggregateInputType = {
    rank?: true
  }

  export type LeaderBoardSumAggregateInputType = {
    rank?: true
  }

  export type LeaderBoardMinAggregateInputType = {
    id?: true
    contestId?: true
    userId?: true
    rank?: true
  }

  export type LeaderBoardMaxAggregateInputType = {
    id?: true
    contestId?: true
    userId?: true
    rank?: true
  }

  export type LeaderBoardCountAggregateInputType = {
    id?: true
    contestId?: true
    userId?: true
    rank?: true
    _all?: true
  }

  export type LeaderBoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderBoard to aggregate.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaderBoards
    **/
    _count?: true | LeaderBoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderBoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderBoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderBoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderBoardMaxAggregateInputType
  }

  export type GetLeaderBoardAggregateType<T extends LeaderBoardAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderBoard[P]>
      : GetScalarType<T[P], AggregateLeaderBoard[P]>
  }




  export type LeaderBoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderBoardWhereInput
    orderBy?: LeaderBoardOrderByWithAggregationInput | LeaderBoardOrderByWithAggregationInput[]
    by: LeaderBoardScalarFieldEnum[] | LeaderBoardScalarFieldEnum
    having?: LeaderBoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderBoardCountAggregateInputType | true
    _avg?: LeaderBoardAvgAggregateInputType
    _sum?: LeaderBoardSumAggregateInputType
    _min?: LeaderBoardMinAggregateInputType
    _max?: LeaderBoardMaxAggregateInputType
  }

  export type LeaderBoardGroupByOutputType = {
    id: string
    contestId: string
    userId: string
    rank: number
    _count: LeaderBoardCountAggregateOutputType | null
    _avg: LeaderBoardAvgAggregateOutputType | null
    _sum: LeaderBoardSumAggregateOutputType | null
    _min: LeaderBoardMinAggregateOutputType | null
    _max: LeaderBoardMaxAggregateOutputType | null
  }

  type GetLeaderBoardGroupByPayload<T extends LeaderBoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderBoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderBoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderBoardGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderBoardGroupByOutputType[P]>
        }
      >
    >


  export type LeaderBoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    userId?: boolean
    rank?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderBoard"]>

  export type LeaderBoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    userId?: boolean
    rank?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderBoard"]>

  export type LeaderBoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestId?: boolean
    userId?: boolean
    rank?: boolean
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderBoard"]>

  export type LeaderBoardSelectScalar = {
    id?: boolean
    contestId?: boolean
    userId?: boolean
    rank?: boolean
  }

  export type LeaderBoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contestId" | "userId" | "rank", ExtArgs["result"]["leaderBoard"]>
  export type LeaderBoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaderBoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaderBoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contest?: boolean | ContestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeaderBoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaderBoard"
    objects: {
      contest: Prisma.$ContestPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contestId: string
      userId: string
      rank: number
    }, ExtArgs["result"]["leaderBoard"]>
    composites: {}
  }

  type LeaderBoardGetPayload<S extends boolean | null | undefined | LeaderBoardDefaultArgs> = $Result.GetResult<Prisma.$LeaderBoardPayload, S>

  type LeaderBoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderBoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderBoardCountAggregateInputType | true
    }

  export interface LeaderBoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaderBoard'], meta: { name: 'LeaderBoard' } }
    /**
     * Find zero or one LeaderBoard that matches the filter.
     * @param {LeaderBoardFindUniqueArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderBoardFindUniqueArgs>(args: SelectSubset<T, LeaderBoardFindUniqueArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaderBoard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderBoardFindUniqueOrThrowArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderBoardFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderBoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderBoard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardFindFirstArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderBoardFindFirstArgs>(args?: SelectSubset<T, LeaderBoardFindFirstArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderBoard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardFindFirstOrThrowArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderBoardFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderBoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaderBoards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaderBoards
     * const leaderBoards = await prisma.leaderBoard.findMany()
     * 
     * // Get first 10 LeaderBoards
     * const leaderBoards = await prisma.leaderBoard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderBoardWithIdOnly = await prisma.leaderBoard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderBoardFindManyArgs>(args?: SelectSubset<T, LeaderBoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaderBoard.
     * @param {LeaderBoardCreateArgs} args - Arguments to create a LeaderBoard.
     * @example
     * // Create one LeaderBoard
     * const LeaderBoard = await prisma.leaderBoard.create({
     *   data: {
     *     // ... data to create a LeaderBoard
     *   }
     * })
     * 
     */
    create<T extends LeaderBoardCreateArgs>(args: SelectSubset<T, LeaderBoardCreateArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaderBoards.
     * @param {LeaderBoardCreateManyArgs} args - Arguments to create many LeaderBoards.
     * @example
     * // Create many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderBoardCreateManyArgs>(args?: SelectSubset<T, LeaderBoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaderBoards and returns the data saved in the database.
     * @param {LeaderBoardCreateManyAndReturnArgs} args - Arguments to create many LeaderBoards.
     * @example
     * // Create many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaderBoards and only return the `id`
     * const leaderBoardWithIdOnly = await prisma.leaderBoard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderBoardCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderBoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaderBoard.
     * @param {LeaderBoardDeleteArgs} args - Arguments to delete one LeaderBoard.
     * @example
     * // Delete one LeaderBoard
     * const LeaderBoard = await prisma.leaderBoard.delete({
     *   where: {
     *     // ... filter to delete one LeaderBoard
     *   }
     * })
     * 
     */
    delete<T extends LeaderBoardDeleteArgs>(args: SelectSubset<T, LeaderBoardDeleteArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaderBoard.
     * @param {LeaderBoardUpdateArgs} args - Arguments to update one LeaderBoard.
     * @example
     * // Update one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderBoardUpdateArgs>(args: SelectSubset<T, LeaderBoardUpdateArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaderBoards.
     * @param {LeaderBoardDeleteManyArgs} args - Arguments to filter LeaderBoards to delete.
     * @example
     * // Delete a few LeaderBoards
     * const { count } = await prisma.leaderBoard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderBoardDeleteManyArgs>(args?: SelectSubset<T, LeaderBoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderBoardUpdateManyArgs>(args: SelectSubset<T, LeaderBoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderBoards and returns the data updated in the database.
     * @param {LeaderBoardUpdateManyAndReturnArgs} args - Arguments to update many LeaderBoards.
     * @example
     * // Update many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaderBoards and only return the `id`
     * const leaderBoardWithIdOnly = await prisma.leaderBoard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaderBoardUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderBoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaderBoard.
     * @param {LeaderBoardUpsertArgs} args - Arguments to update or create a LeaderBoard.
     * @example
     * // Update or create a LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.upsert({
     *   create: {
     *     // ... data to create a LeaderBoard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaderBoard we want to update
     *   }
     * })
     */
    upsert<T extends LeaderBoardUpsertArgs>(args: SelectSubset<T, LeaderBoardUpsertArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaderBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardCountArgs} args - Arguments to filter LeaderBoards to count.
     * @example
     * // Count the number of LeaderBoards
     * const count = await prisma.leaderBoard.count({
     *   where: {
     *     // ... the filter for the LeaderBoards we want to count
     *   }
     * })
    **/
    count<T extends LeaderBoardCountArgs>(
      args?: Subset<T, LeaderBoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderBoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaderBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaderBoardAggregateArgs>(args: Subset<T, LeaderBoardAggregateArgs>): Prisma.PrismaPromise<GetLeaderBoardAggregateType<T>>

    /**
     * Group by LeaderBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaderBoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderBoardGroupByArgs['orderBy'] }
        : { orderBy?: LeaderBoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaderBoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaderBoard model
   */
  readonly fields: LeaderBoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaderBoard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderBoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contest<T extends ContestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestDefaultArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaderBoard model
   */
  interface LeaderBoardFieldRefs {
    readonly id: FieldRef<"LeaderBoard", 'String'>
    readonly contestId: FieldRef<"LeaderBoard", 'String'>
    readonly userId: FieldRef<"LeaderBoard", 'String'>
    readonly rank: FieldRef<"LeaderBoard", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LeaderBoard findUnique
   */
  export type LeaderBoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard findUniqueOrThrow
   */
  export type LeaderBoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard findFirst
   */
  export type LeaderBoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderBoards.
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderBoards.
     */
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * LeaderBoard findFirstOrThrow
   */
  export type LeaderBoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderBoards.
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderBoards.
     */
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * LeaderBoard findMany
   */
  export type LeaderBoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoards to fetch.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaderBoards.
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * LeaderBoard create
   */
  export type LeaderBoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaderBoard.
     */
    data: XOR<LeaderBoardCreateInput, LeaderBoardUncheckedCreateInput>
  }

  /**
   * LeaderBoard createMany
   */
  export type LeaderBoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaderBoards.
     */
    data: LeaderBoardCreateManyInput | LeaderBoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaderBoard createManyAndReturn
   */
  export type LeaderBoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * The data used to create many LeaderBoards.
     */
    data: LeaderBoardCreateManyInput | LeaderBoardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderBoard update
   */
  export type LeaderBoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaderBoard.
     */
    data: XOR<LeaderBoardUpdateInput, LeaderBoardUncheckedUpdateInput>
    /**
     * Choose, which LeaderBoard to update.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard updateMany
   */
  export type LeaderBoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaderBoards.
     */
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyInput>
    /**
     * Filter which LeaderBoards to update
     */
    where?: LeaderBoardWhereInput
    /**
     * Limit how many LeaderBoards to update.
     */
    limit?: number
  }

  /**
   * LeaderBoard updateManyAndReturn
   */
  export type LeaderBoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * The data used to update LeaderBoards.
     */
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyInput>
    /**
     * Filter which LeaderBoards to update
     */
    where?: LeaderBoardWhereInput
    /**
     * Limit how many LeaderBoards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderBoard upsert
   */
  export type LeaderBoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaderBoard to update in case it exists.
     */
    where: LeaderBoardWhereUniqueInput
    /**
     * In case the LeaderBoard found by the `where` argument doesn't exist, create a new LeaderBoard with this data.
     */
    create: XOR<LeaderBoardCreateInput, LeaderBoardUncheckedCreateInput>
    /**
     * In case the LeaderBoard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderBoardUpdateInput, LeaderBoardUncheckedUpdateInput>
  }

  /**
   * LeaderBoard delete
   */
  export type LeaderBoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter which LeaderBoard to delete.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard deleteMany
   */
  export type LeaderBoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderBoards to delete
     */
    where?: LeaderBoardWhereInput
    /**
     * Limit how many LeaderBoards to delete.
     */
    limit?: number
  }

  /**
   * LeaderBoard without action
   */
  export type LeaderBoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startTime: 'startTime'
  };

  export type ContestScalarFieldEnum = (typeof ContestScalarFieldEnum)[keyof typeof ContestScalarFieldEnum]


  export const ContestToChallengeMappingScalarFieldEnum: {
    id: 'id',
    contestId: 'contestId',
    challengeId: 'challengeId',
    index: 'index'
  };

  export type ContestToChallengeMappingScalarFieldEnum = (typeof ContestToChallengeMappingScalarFieldEnum)[keyof typeof ContestToChallengeMappingScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    notionDocId: 'notionDocId',
    contestId: 'contestId',
    maxPoints: 'maxPoints'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    submissions: 'submissions',
    userId: 'userId',
    contestToChallengeMappingId: 'contestToChallengeMappingId',
    points: 'points',
    createdAt: 'createdAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const LeaderBoardScalarFieldEnum: {
    id: 'id',
    contestId: 'contestId',
    userId: 'userId',
    rank: 'rank'
  };

  export type LeaderBoardScalarFieldEnum = (typeof LeaderBoardScalarFieldEnum)[keyof typeof LeaderBoardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    leaderboard?: LeaderBoardListRelationFilter
    submissions?: SubmissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    leaderboard?: LeaderBoardOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    leaderboard?: LeaderBoardListRelationFilter
    submissions?: SubmissionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type ContestWhereInput = {
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    id?: StringFilter<"Contest"> | string
    title?: StringFilter<"Contest"> | string
    startTime?: DateTimeFilter<"Contest"> | Date | string
    contestToChallengeMapping?: ContestToChallengeMappingListRelationFilter
    leaderboard?: LeaderBoardListRelationFilter
  }

  export type ContestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    contestToChallengeMapping?: ContestToChallengeMappingOrderByRelationAggregateInput
    leaderboard?: LeaderBoardOrderByRelationAggregateInput
  }

  export type ContestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    title?: StringFilter<"Contest"> | string
    startTime?: DateTimeFilter<"Contest"> | Date | string
    contestToChallengeMapping?: ContestToChallengeMappingListRelationFilter
    leaderboard?: LeaderBoardListRelationFilter
  }, "id">

  export type ContestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    _count?: ContestCountOrderByAggregateInput
    _max?: ContestMaxOrderByAggregateInput
    _min?: ContestMinOrderByAggregateInput
  }

  export type ContestScalarWhereWithAggregatesInput = {
    AND?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    OR?: ContestScalarWhereWithAggregatesInput[]
    NOT?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contest"> | string
    title?: StringWithAggregatesFilter<"Contest"> | string
    startTime?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
  }

  export type ContestToChallengeMappingWhereInput = {
    AND?: ContestToChallengeMappingWhereInput | ContestToChallengeMappingWhereInput[]
    OR?: ContestToChallengeMappingWhereInput[]
    NOT?: ContestToChallengeMappingWhereInput | ContestToChallengeMappingWhereInput[]
    id?: StringFilter<"ContestToChallengeMapping"> | string
    contestId?: StringFilter<"ContestToChallengeMapping"> | string
    challengeId?: StringFilter<"ContestToChallengeMapping"> | string
    index?: IntFilter<"ContestToChallengeMapping"> | number
    contests?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    submissions?: SubmissionListRelationFilter
  }

  export type ContestToChallengeMappingOrderByWithRelationInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
    index?: SortOrder
    contests?: ContestOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type ContestToChallengeMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contestId_challengeId?: ContestToChallengeMappingContestIdChallengeIdCompoundUniqueInput
    AND?: ContestToChallengeMappingWhereInput | ContestToChallengeMappingWhereInput[]
    OR?: ContestToChallengeMappingWhereInput[]
    NOT?: ContestToChallengeMappingWhereInput | ContestToChallengeMappingWhereInput[]
    contestId?: StringFilter<"ContestToChallengeMapping"> | string
    challengeId?: StringFilter<"ContestToChallengeMapping"> | string
    index?: IntFilter<"ContestToChallengeMapping"> | number
    contests?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    submissions?: SubmissionListRelationFilter
  }, "id" | "contestId_challengeId">

  export type ContestToChallengeMappingOrderByWithAggregationInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
    index?: SortOrder
    _count?: ContestToChallengeMappingCountOrderByAggregateInput
    _avg?: ContestToChallengeMappingAvgOrderByAggregateInput
    _max?: ContestToChallengeMappingMaxOrderByAggregateInput
    _min?: ContestToChallengeMappingMinOrderByAggregateInput
    _sum?: ContestToChallengeMappingSumOrderByAggregateInput
  }

  export type ContestToChallengeMappingScalarWhereWithAggregatesInput = {
    AND?: ContestToChallengeMappingScalarWhereWithAggregatesInput | ContestToChallengeMappingScalarWhereWithAggregatesInput[]
    OR?: ContestToChallengeMappingScalarWhereWithAggregatesInput[]
    NOT?: ContestToChallengeMappingScalarWhereWithAggregatesInput | ContestToChallengeMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContestToChallengeMapping"> | string
    contestId?: StringWithAggregatesFilter<"ContestToChallengeMapping"> | string
    challengeId?: StringWithAggregatesFilter<"ContestToChallengeMapping"> | string
    index?: IntWithAggregatesFilter<"ContestToChallengeMapping"> | number
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: StringFilter<"Challenge"> | string
    title?: StringFilter<"Challenge"> | string
    notionDocId?: StringFilter<"Challenge"> | string
    contestId?: StringFilter<"Challenge"> | string
    maxPoints?: IntFilter<"Challenge"> | number
    contestToChallengeMapping?: ContestToChallengeMappingListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    notionDocId?: SortOrder
    contestId?: SortOrder
    maxPoints?: SortOrder
    contestToChallengeMapping?: ContestToChallengeMappingOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    title?: StringFilter<"Challenge"> | string
    notionDocId?: StringFilter<"Challenge"> | string
    contestId?: StringFilter<"Challenge"> | string
    maxPoints?: IntFilter<"Challenge"> | number
    contestToChallengeMapping?: ContestToChallengeMappingListRelationFilter
  }, "id">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    notionDocId?: SortOrder
    contestId?: SortOrder
    maxPoints?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenge"> | string
    title?: StringWithAggregatesFilter<"Challenge"> | string
    notionDocId?: StringWithAggregatesFilter<"Challenge"> | string
    contestId?: StringWithAggregatesFilter<"Challenge"> | string
    maxPoints?: IntWithAggregatesFilter<"Challenge"> | number
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    submissions?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    contestToChallengeMappingId?: StringFilter<"Submission"> | string
    points?: IntFilter<"Submission"> | number
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contestToChallengeMapping?: XOR<ContestToChallengeMappingScalarRelationFilter, ContestToChallengeMappingWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    submissions?: SortOrder
    userId?: SortOrder
    contestToChallengeMappingId?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contestToChallengeMapping?: ContestToChallengeMappingOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    submissions?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    contestToChallengeMappingId?: StringFilter<"Submission"> | string
    points?: IntFilter<"Submission"> | number
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contestToChallengeMapping?: XOR<ContestToChallengeMappingScalarRelationFilter, ContestToChallengeMappingWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    submissions?: SortOrder
    userId?: SortOrder
    contestToChallengeMappingId?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    submissions?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    contestToChallengeMappingId?: StringWithAggregatesFilter<"Submission"> | string
    points?: IntWithAggregatesFilter<"Submission"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type LeaderBoardWhereInput = {
    AND?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    OR?: LeaderBoardWhereInput[]
    NOT?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    id?: StringFilter<"LeaderBoard"> | string
    contestId?: StringFilter<"LeaderBoard"> | string
    userId?: StringFilter<"LeaderBoard"> | string
    rank?: IntFilter<"LeaderBoard"> | number
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LeaderBoardOrderByWithRelationInput = {
    id?: SortOrder
    contestId?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
    contest?: ContestOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LeaderBoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contestId_rank?: LeaderBoardContestIdRankCompoundUniqueInput
    AND?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    OR?: LeaderBoardWhereInput[]
    NOT?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    contestId?: StringFilter<"LeaderBoard"> | string
    userId?: StringFilter<"LeaderBoard"> | string
    rank?: IntFilter<"LeaderBoard"> | number
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "contestId_rank">

  export type LeaderBoardOrderByWithAggregationInput = {
    id?: SortOrder
    contestId?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
    _count?: LeaderBoardCountOrderByAggregateInput
    _avg?: LeaderBoardAvgOrderByAggregateInput
    _max?: LeaderBoardMaxOrderByAggregateInput
    _min?: LeaderBoardMinOrderByAggregateInput
    _sum?: LeaderBoardSumOrderByAggregateInput
  }

  export type LeaderBoardScalarWhereWithAggregatesInput = {
    AND?: LeaderBoardScalarWhereWithAggregatesInput | LeaderBoardScalarWhereWithAggregatesInput[]
    OR?: LeaderBoardScalarWhereWithAggregatesInput[]
    NOT?: LeaderBoardScalarWhereWithAggregatesInput | LeaderBoardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaderBoard"> | string
    contestId?: StringWithAggregatesFilter<"LeaderBoard"> | string
    userId?: StringWithAggregatesFilter<"LeaderBoard"> | string
    rank?: IntWithAggregatesFilter<"LeaderBoard"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    leaderboard?: LeaderBoardCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    leaderboard?: LeaderBoardUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    leaderboard?: LeaderBoardUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    leaderboard?: LeaderBoardUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ContestCreateInput = {
    id?: string
    title: string
    startTime: Date | string
    contestToChallengeMapping?: ContestToChallengeMappingCreateNestedManyWithoutContestsInput
    leaderboard?: LeaderBoardCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateInput = {
    id?: string
    title: string
    startTime: Date | string
    contestToChallengeMapping?: ContestToChallengeMappingUncheckedCreateNestedManyWithoutContestsInput
    leaderboard?: LeaderBoardUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    contestToChallengeMapping?: ContestToChallengeMappingUpdateManyWithoutContestsNestedInput
    leaderboard?: LeaderBoardUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    contestToChallengeMapping?: ContestToChallengeMappingUncheckedUpdateManyWithoutContestsNestedInput
    leaderboard?: LeaderBoardUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestCreateManyInput = {
    id?: string
    title: string
    startTime: Date | string
  }

  export type ContestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestToChallengeMappingCreateInput = {
    id?: string
    index: number
    contests: ContestCreateNestedOneWithoutContestToChallengeMappingInput
    challenge: ChallengeCreateNestedOneWithoutContestToChallengeMappingInput
    submissions?: SubmissionCreateNestedManyWithoutContestToChallengeMappingInput
  }

  export type ContestToChallengeMappingUncheckedCreateInput = {
    id?: string
    contestId: string
    challengeId: string
    index: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutContestToChallengeMappingInput
  }

  export type ContestToChallengeMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    contests?: ContestUpdateOneRequiredWithoutContestToChallengeMappingNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutContestToChallengeMappingNestedInput
    submissions?: SubmissionUpdateManyWithoutContestToChallengeMappingNestedInput
  }

  export type ContestToChallengeMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutContestToChallengeMappingNestedInput
  }

  export type ContestToChallengeMappingCreateManyInput = {
    id?: string
    contestId: string
    challengeId: string
    index: number
  }

  export type ContestToChallengeMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type ContestToChallengeMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeCreateInput = {
    id?: string
    title: string
    notionDocId: string
    contestId: string
    maxPoints: number
    contestToChallengeMapping?: ContestToChallengeMappingCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: string
    title: string
    notionDocId: string
    contestId: string
    maxPoints: number
    contestToChallengeMapping?: ContestToChallengeMappingUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notionDocId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    contestToChallengeMapping?: ContestToChallengeMappingUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notionDocId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
    contestToChallengeMapping?: ContestToChallengeMappingUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: string
    title: string
    notionDocId: string
    contestId: string
    maxPoints: number
  }

  export type ChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notionDocId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notionDocId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
  }

  export type SubmissionCreateInput = {
    id?: string
    submissions: string
    points: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    contestToChallengeMapping: ContestToChallengeMappingCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    submissions: string
    userId: string
    contestToChallengeMappingId: string
    points: number
    createdAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    contestToChallengeMapping?: ContestToChallengeMappingUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contestToChallengeMappingId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    submissions: string
    userId: string
    contestToChallengeMappingId: string
    points: number
    createdAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contestToChallengeMappingId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderBoardCreateInput = {
    id?: string
    rank: number
    contest: ContestCreateNestedOneWithoutLeaderboardInput
    user: UserCreateNestedOneWithoutLeaderboardInput
  }

  export type LeaderBoardUncheckedCreateInput = {
    id?: string
    contestId: string
    userId: string
    rank: number
  }

  export type LeaderBoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    contest?: ContestUpdateOneRequiredWithoutLeaderboardNestedInput
    user?: UserUpdateOneRequiredWithoutLeaderboardNestedInput
  }

  export type LeaderBoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type LeaderBoardCreateManyInput = {
    id?: string
    contestId: string
    userId: string
    rank: number
  }

  export type LeaderBoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type LeaderBoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type LeaderBoardListRelationFilter = {
    every?: LeaderBoardWhereInput
    some?: LeaderBoardWhereInput
    none?: LeaderBoardWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type LeaderBoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContestToChallengeMappingListRelationFilter = {
    every?: ContestToChallengeMappingWhereInput
    some?: ContestToChallengeMappingWhereInput
    none?: ContestToChallengeMappingWhereInput
  }

  export type ContestToChallengeMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
  }

  export type ContestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
  }

  export type ContestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ContestScalarRelationFilter = {
    is?: ContestWhereInput
    isNot?: ContestWhereInput
  }

  export type ChallengeScalarRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type ContestToChallengeMappingContestIdChallengeIdCompoundUniqueInput = {
    contestId: string
    challengeId: string
  }

  export type ContestToChallengeMappingCountOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
    index?: SortOrder
  }

  export type ContestToChallengeMappingAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type ContestToChallengeMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
    index?: SortOrder
  }

  export type ContestToChallengeMappingMinOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    challengeId?: SortOrder
    index?: SortOrder
  }

  export type ContestToChallengeMappingSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    notionDocId?: SortOrder
    contestId?: SortOrder
    maxPoints?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    maxPoints?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    notionDocId?: SortOrder
    contestId?: SortOrder
    maxPoints?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    notionDocId?: SortOrder
    contestId?: SortOrder
    maxPoints?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    maxPoints?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ContestToChallengeMappingScalarRelationFilter = {
    is?: ContestToChallengeMappingWhereInput
    isNot?: ContestToChallengeMappingWhereInput
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    submissions?: SortOrder
    userId?: SortOrder
    contestToChallengeMappingId?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    submissions?: SortOrder
    userId?: SortOrder
    contestToChallengeMappingId?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    submissions?: SortOrder
    userId?: SortOrder
    contestToChallengeMappingId?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type LeaderBoardContestIdRankCompoundUniqueInput = {
    contestId: string
    rank: number
  }

  export type LeaderBoardCountOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
  }

  export type LeaderBoardAvgOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type LeaderBoardMaxOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
  }

  export type LeaderBoardMinOrderByAggregateInput = {
    id?: SortOrder
    contestId?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
  }

  export type LeaderBoardSumOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type LeaderBoardCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput> | LeaderBoardCreateWithoutUserInput[] | LeaderBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutUserInput | LeaderBoardCreateOrConnectWithoutUserInput[]
    createMany?: LeaderBoardCreateManyUserInputEnvelope
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type LeaderBoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput> | LeaderBoardCreateWithoutUserInput[] | LeaderBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutUserInput | LeaderBoardCreateOrConnectWithoutUserInput[]
    createMany?: LeaderBoardCreateManyUserInputEnvelope
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type LeaderBoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput> | LeaderBoardCreateWithoutUserInput[] | LeaderBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutUserInput | LeaderBoardCreateOrConnectWithoutUserInput[]
    upsert?: LeaderBoardUpsertWithWhereUniqueWithoutUserInput | LeaderBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaderBoardCreateManyUserInputEnvelope
    set?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    disconnect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    delete?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    update?: LeaderBoardUpdateWithWhereUniqueWithoutUserInput | LeaderBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaderBoardUpdateManyWithWhereWithoutUserInput | LeaderBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type LeaderBoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput> | LeaderBoardCreateWithoutUserInput[] | LeaderBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutUserInput | LeaderBoardCreateOrConnectWithoutUserInput[]
    upsert?: LeaderBoardUpsertWithWhereUniqueWithoutUserInput | LeaderBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaderBoardCreateManyUserInputEnvelope
    set?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    disconnect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    delete?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    update?: LeaderBoardUpdateWithWhereUniqueWithoutUserInput | LeaderBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaderBoardUpdateManyWithWhereWithoutUserInput | LeaderBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ContestToChallengeMappingCreateNestedManyWithoutContestsInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutContestsInput, ContestToChallengeMappingUncheckedCreateWithoutContestsInput> | ContestToChallengeMappingCreateWithoutContestsInput[] | ContestToChallengeMappingUncheckedCreateWithoutContestsInput[]
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutContestsInput | ContestToChallengeMappingCreateOrConnectWithoutContestsInput[]
    createMany?: ContestToChallengeMappingCreateManyContestsInputEnvelope
    connect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
  }

  export type LeaderBoardCreateNestedManyWithoutContestInput = {
    create?: XOR<LeaderBoardCreateWithoutContestInput, LeaderBoardUncheckedCreateWithoutContestInput> | LeaderBoardCreateWithoutContestInput[] | LeaderBoardUncheckedCreateWithoutContestInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutContestInput | LeaderBoardCreateOrConnectWithoutContestInput[]
    createMany?: LeaderBoardCreateManyContestInputEnvelope
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
  }

  export type ContestToChallengeMappingUncheckedCreateNestedManyWithoutContestsInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutContestsInput, ContestToChallengeMappingUncheckedCreateWithoutContestsInput> | ContestToChallengeMappingCreateWithoutContestsInput[] | ContestToChallengeMappingUncheckedCreateWithoutContestsInput[]
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutContestsInput | ContestToChallengeMappingCreateOrConnectWithoutContestsInput[]
    createMany?: ContestToChallengeMappingCreateManyContestsInputEnvelope
    connect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
  }

  export type LeaderBoardUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<LeaderBoardCreateWithoutContestInput, LeaderBoardUncheckedCreateWithoutContestInput> | LeaderBoardCreateWithoutContestInput[] | LeaderBoardUncheckedCreateWithoutContestInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutContestInput | LeaderBoardCreateOrConnectWithoutContestInput[]
    createMany?: LeaderBoardCreateManyContestInputEnvelope
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContestToChallengeMappingUpdateManyWithoutContestsNestedInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutContestsInput, ContestToChallengeMappingUncheckedCreateWithoutContestsInput> | ContestToChallengeMappingCreateWithoutContestsInput[] | ContestToChallengeMappingUncheckedCreateWithoutContestsInput[]
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutContestsInput | ContestToChallengeMappingCreateOrConnectWithoutContestsInput[]
    upsert?: ContestToChallengeMappingUpsertWithWhereUniqueWithoutContestsInput | ContestToChallengeMappingUpsertWithWhereUniqueWithoutContestsInput[]
    createMany?: ContestToChallengeMappingCreateManyContestsInputEnvelope
    set?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    disconnect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    delete?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    connect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    update?: ContestToChallengeMappingUpdateWithWhereUniqueWithoutContestsInput | ContestToChallengeMappingUpdateWithWhereUniqueWithoutContestsInput[]
    updateMany?: ContestToChallengeMappingUpdateManyWithWhereWithoutContestsInput | ContestToChallengeMappingUpdateManyWithWhereWithoutContestsInput[]
    deleteMany?: ContestToChallengeMappingScalarWhereInput | ContestToChallengeMappingScalarWhereInput[]
  }

  export type LeaderBoardUpdateManyWithoutContestNestedInput = {
    create?: XOR<LeaderBoardCreateWithoutContestInput, LeaderBoardUncheckedCreateWithoutContestInput> | LeaderBoardCreateWithoutContestInput[] | LeaderBoardUncheckedCreateWithoutContestInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutContestInput | LeaderBoardCreateOrConnectWithoutContestInput[]
    upsert?: LeaderBoardUpsertWithWhereUniqueWithoutContestInput | LeaderBoardUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: LeaderBoardCreateManyContestInputEnvelope
    set?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    disconnect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    delete?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    update?: LeaderBoardUpdateWithWhereUniqueWithoutContestInput | LeaderBoardUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: LeaderBoardUpdateManyWithWhereWithoutContestInput | LeaderBoardUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
  }

  export type ContestToChallengeMappingUncheckedUpdateManyWithoutContestsNestedInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutContestsInput, ContestToChallengeMappingUncheckedCreateWithoutContestsInput> | ContestToChallengeMappingCreateWithoutContestsInput[] | ContestToChallengeMappingUncheckedCreateWithoutContestsInput[]
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutContestsInput | ContestToChallengeMappingCreateOrConnectWithoutContestsInput[]
    upsert?: ContestToChallengeMappingUpsertWithWhereUniqueWithoutContestsInput | ContestToChallengeMappingUpsertWithWhereUniqueWithoutContestsInput[]
    createMany?: ContestToChallengeMappingCreateManyContestsInputEnvelope
    set?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    disconnect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    delete?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    connect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    update?: ContestToChallengeMappingUpdateWithWhereUniqueWithoutContestsInput | ContestToChallengeMappingUpdateWithWhereUniqueWithoutContestsInput[]
    updateMany?: ContestToChallengeMappingUpdateManyWithWhereWithoutContestsInput | ContestToChallengeMappingUpdateManyWithWhereWithoutContestsInput[]
    deleteMany?: ContestToChallengeMappingScalarWhereInput | ContestToChallengeMappingScalarWhereInput[]
  }

  export type LeaderBoardUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<LeaderBoardCreateWithoutContestInput, LeaderBoardUncheckedCreateWithoutContestInput> | LeaderBoardCreateWithoutContestInput[] | LeaderBoardUncheckedCreateWithoutContestInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutContestInput | LeaderBoardCreateOrConnectWithoutContestInput[]
    upsert?: LeaderBoardUpsertWithWhereUniqueWithoutContestInput | LeaderBoardUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: LeaderBoardCreateManyContestInputEnvelope
    set?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    disconnect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    delete?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    update?: LeaderBoardUpdateWithWhereUniqueWithoutContestInput | LeaderBoardUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: LeaderBoardUpdateManyWithWhereWithoutContestInput | LeaderBoardUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
  }

  export type ContestCreateNestedOneWithoutContestToChallengeMappingInput = {
    create?: XOR<ContestCreateWithoutContestToChallengeMappingInput, ContestUncheckedCreateWithoutContestToChallengeMappingInput>
    connectOrCreate?: ContestCreateOrConnectWithoutContestToChallengeMappingInput
    connect?: ContestWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutContestToChallengeMappingInput = {
    create?: XOR<ChallengeCreateWithoutContestToChallengeMappingInput, ChallengeUncheckedCreateWithoutContestToChallengeMappingInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutContestToChallengeMappingInput
    connect?: ChallengeWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutContestToChallengeMappingInput = {
    create?: XOR<SubmissionCreateWithoutContestToChallengeMappingInput, SubmissionUncheckedCreateWithoutContestToChallengeMappingInput> | SubmissionCreateWithoutContestToChallengeMappingInput[] | SubmissionUncheckedCreateWithoutContestToChallengeMappingInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutContestToChallengeMappingInput | SubmissionCreateOrConnectWithoutContestToChallengeMappingInput[]
    createMany?: SubmissionCreateManyContestToChallengeMappingInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutContestToChallengeMappingInput = {
    create?: XOR<SubmissionCreateWithoutContestToChallengeMappingInput, SubmissionUncheckedCreateWithoutContestToChallengeMappingInput> | SubmissionCreateWithoutContestToChallengeMappingInput[] | SubmissionUncheckedCreateWithoutContestToChallengeMappingInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutContestToChallengeMappingInput | SubmissionCreateOrConnectWithoutContestToChallengeMappingInput[]
    createMany?: SubmissionCreateManyContestToChallengeMappingInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContestUpdateOneRequiredWithoutContestToChallengeMappingNestedInput = {
    create?: XOR<ContestCreateWithoutContestToChallengeMappingInput, ContestUncheckedCreateWithoutContestToChallengeMappingInput>
    connectOrCreate?: ContestCreateOrConnectWithoutContestToChallengeMappingInput
    upsert?: ContestUpsertWithoutContestToChallengeMappingInput
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutContestToChallengeMappingInput, ContestUpdateWithoutContestToChallengeMappingInput>, ContestUncheckedUpdateWithoutContestToChallengeMappingInput>
  }

  export type ChallengeUpdateOneRequiredWithoutContestToChallengeMappingNestedInput = {
    create?: XOR<ChallengeCreateWithoutContestToChallengeMappingInput, ChallengeUncheckedCreateWithoutContestToChallengeMappingInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutContestToChallengeMappingInput
    upsert?: ChallengeUpsertWithoutContestToChallengeMappingInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutContestToChallengeMappingInput, ChallengeUpdateWithoutContestToChallengeMappingInput>, ChallengeUncheckedUpdateWithoutContestToChallengeMappingInput>
  }

  export type SubmissionUpdateManyWithoutContestToChallengeMappingNestedInput = {
    create?: XOR<SubmissionCreateWithoutContestToChallengeMappingInput, SubmissionUncheckedCreateWithoutContestToChallengeMappingInput> | SubmissionCreateWithoutContestToChallengeMappingInput[] | SubmissionUncheckedCreateWithoutContestToChallengeMappingInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutContestToChallengeMappingInput | SubmissionCreateOrConnectWithoutContestToChallengeMappingInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutContestToChallengeMappingInput | SubmissionUpsertWithWhereUniqueWithoutContestToChallengeMappingInput[]
    createMany?: SubmissionCreateManyContestToChallengeMappingInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutContestToChallengeMappingInput | SubmissionUpdateWithWhereUniqueWithoutContestToChallengeMappingInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutContestToChallengeMappingInput | SubmissionUpdateManyWithWhereWithoutContestToChallengeMappingInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutContestToChallengeMappingNestedInput = {
    create?: XOR<SubmissionCreateWithoutContestToChallengeMappingInput, SubmissionUncheckedCreateWithoutContestToChallengeMappingInput> | SubmissionCreateWithoutContestToChallengeMappingInput[] | SubmissionUncheckedCreateWithoutContestToChallengeMappingInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutContestToChallengeMappingInput | SubmissionCreateOrConnectWithoutContestToChallengeMappingInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutContestToChallengeMappingInput | SubmissionUpsertWithWhereUniqueWithoutContestToChallengeMappingInput[]
    createMany?: SubmissionCreateManyContestToChallengeMappingInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutContestToChallengeMappingInput | SubmissionUpdateWithWhereUniqueWithoutContestToChallengeMappingInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutContestToChallengeMappingInput | SubmissionUpdateManyWithWhereWithoutContestToChallengeMappingInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ContestToChallengeMappingCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutChallengeInput, ContestToChallengeMappingUncheckedCreateWithoutChallengeInput> | ContestToChallengeMappingCreateWithoutChallengeInput[] | ContestToChallengeMappingUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutChallengeInput | ContestToChallengeMappingCreateOrConnectWithoutChallengeInput[]
    createMany?: ContestToChallengeMappingCreateManyChallengeInputEnvelope
    connect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
  }

  export type ContestToChallengeMappingUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutChallengeInput, ContestToChallengeMappingUncheckedCreateWithoutChallengeInput> | ContestToChallengeMappingCreateWithoutChallengeInput[] | ContestToChallengeMappingUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutChallengeInput | ContestToChallengeMappingCreateOrConnectWithoutChallengeInput[]
    createMany?: ContestToChallengeMappingCreateManyChallengeInputEnvelope
    connect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
  }

  export type ContestToChallengeMappingUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutChallengeInput, ContestToChallengeMappingUncheckedCreateWithoutChallengeInput> | ContestToChallengeMappingCreateWithoutChallengeInput[] | ContestToChallengeMappingUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutChallengeInput | ContestToChallengeMappingCreateOrConnectWithoutChallengeInput[]
    upsert?: ContestToChallengeMappingUpsertWithWhereUniqueWithoutChallengeInput | ContestToChallengeMappingUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ContestToChallengeMappingCreateManyChallengeInputEnvelope
    set?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    disconnect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    delete?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    connect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    update?: ContestToChallengeMappingUpdateWithWhereUniqueWithoutChallengeInput | ContestToChallengeMappingUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ContestToChallengeMappingUpdateManyWithWhereWithoutChallengeInput | ContestToChallengeMappingUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ContestToChallengeMappingScalarWhereInput | ContestToChallengeMappingScalarWhereInput[]
  }

  export type ContestToChallengeMappingUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutChallengeInput, ContestToChallengeMappingUncheckedCreateWithoutChallengeInput> | ContestToChallengeMappingCreateWithoutChallengeInput[] | ContestToChallengeMappingUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutChallengeInput | ContestToChallengeMappingCreateOrConnectWithoutChallengeInput[]
    upsert?: ContestToChallengeMappingUpsertWithWhereUniqueWithoutChallengeInput | ContestToChallengeMappingUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ContestToChallengeMappingCreateManyChallengeInputEnvelope
    set?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    disconnect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    delete?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    connect?: ContestToChallengeMappingWhereUniqueInput | ContestToChallengeMappingWhereUniqueInput[]
    update?: ContestToChallengeMappingUpdateWithWhereUniqueWithoutChallengeInput | ContestToChallengeMappingUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ContestToChallengeMappingUpdateManyWithWhereWithoutChallengeInput | ContestToChallengeMappingUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ContestToChallengeMappingScalarWhereInput | ContestToChallengeMappingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ContestToChallengeMappingCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutSubmissionsInput, ContestToChallengeMappingUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutSubmissionsInput
    connect?: ContestToChallengeMappingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ContestToChallengeMappingUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ContestToChallengeMappingCreateWithoutSubmissionsInput, ContestToChallengeMappingUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ContestToChallengeMappingCreateOrConnectWithoutSubmissionsInput
    upsert?: ContestToChallengeMappingUpsertWithoutSubmissionsInput
    connect?: ContestToChallengeMappingWhereUniqueInput
    update?: XOR<XOR<ContestToChallengeMappingUpdateToOneWithWhereWithoutSubmissionsInput, ContestToChallengeMappingUpdateWithoutSubmissionsInput>, ContestToChallengeMappingUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ContestCreateNestedOneWithoutLeaderboardInput = {
    create?: XOR<ContestCreateWithoutLeaderboardInput, ContestUncheckedCreateWithoutLeaderboardInput>
    connectOrCreate?: ContestCreateOrConnectWithoutLeaderboardInput
    connect?: ContestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeaderboardInput = {
    create?: XOR<UserCreateWithoutLeaderboardInput, UserUncheckedCreateWithoutLeaderboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardInput
    connect?: UserWhereUniqueInput
  }

  export type ContestUpdateOneRequiredWithoutLeaderboardNestedInput = {
    create?: XOR<ContestCreateWithoutLeaderboardInput, ContestUncheckedCreateWithoutLeaderboardInput>
    connectOrCreate?: ContestCreateOrConnectWithoutLeaderboardInput
    upsert?: ContestUpsertWithoutLeaderboardInput
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutLeaderboardInput, ContestUpdateWithoutLeaderboardInput>, ContestUncheckedUpdateWithoutLeaderboardInput>
  }

  export type UserUpdateOneRequiredWithoutLeaderboardNestedInput = {
    create?: XOR<UserCreateWithoutLeaderboardInput, UserUncheckedCreateWithoutLeaderboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardInput
    upsert?: UserUpsertWithoutLeaderboardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaderboardInput, UserUpdateWithoutLeaderboardInput>, UserUncheckedUpdateWithoutLeaderboardInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LeaderBoardCreateWithoutUserInput = {
    id?: string
    rank: number
    contest: ContestCreateNestedOneWithoutLeaderboardInput
  }

  export type LeaderBoardUncheckedCreateWithoutUserInput = {
    id?: string
    contestId: string
    rank: number
  }

  export type LeaderBoardCreateOrConnectWithoutUserInput = {
    where: LeaderBoardWhereUniqueInput
    create: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput>
  }

  export type LeaderBoardCreateManyUserInputEnvelope = {
    data: LeaderBoardCreateManyUserInput | LeaderBoardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    submissions: string
    points: number
    createdAt?: Date | string
    contestToChallengeMapping: ContestToChallengeMappingCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    submissions: string
    contestToChallengeMappingId: string
    points: number
    createdAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaderBoardUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaderBoardWhereUniqueInput
    update: XOR<LeaderBoardUpdateWithoutUserInput, LeaderBoardUncheckedUpdateWithoutUserInput>
    create: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput>
  }

  export type LeaderBoardUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaderBoardWhereUniqueInput
    data: XOR<LeaderBoardUpdateWithoutUserInput, LeaderBoardUncheckedUpdateWithoutUserInput>
  }

  export type LeaderBoardUpdateManyWithWhereWithoutUserInput = {
    where: LeaderBoardScalarWhereInput
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaderBoardScalarWhereInput = {
    AND?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
    OR?: LeaderBoardScalarWhereInput[]
    NOT?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
    id?: StringFilter<"LeaderBoard"> | string
    contestId?: StringFilter<"LeaderBoard"> | string
    userId?: StringFilter<"LeaderBoard"> | string
    rank?: IntFilter<"LeaderBoard"> | number
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    submissions?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    contestToChallengeMappingId?: StringFilter<"Submission"> | string
    points?: IntFilter<"Submission"> | number
    createdAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type ContestToChallengeMappingCreateWithoutContestsInput = {
    id?: string
    index: number
    challenge: ChallengeCreateNestedOneWithoutContestToChallengeMappingInput
    submissions?: SubmissionCreateNestedManyWithoutContestToChallengeMappingInput
  }

  export type ContestToChallengeMappingUncheckedCreateWithoutContestsInput = {
    id?: string
    challengeId: string
    index: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutContestToChallengeMappingInput
  }

  export type ContestToChallengeMappingCreateOrConnectWithoutContestsInput = {
    where: ContestToChallengeMappingWhereUniqueInput
    create: XOR<ContestToChallengeMappingCreateWithoutContestsInput, ContestToChallengeMappingUncheckedCreateWithoutContestsInput>
  }

  export type ContestToChallengeMappingCreateManyContestsInputEnvelope = {
    data: ContestToChallengeMappingCreateManyContestsInput | ContestToChallengeMappingCreateManyContestsInput[]
    skipDuplicates?: boolean
  }

  export type LeaderBoardCreateWithoutContestInput = {
    id?: string
    rank: number
    user: UserCreateNestedOneWithoutLeaderboardInput
  }

  export type LeaderBoardUncheckedCreateWithoutContestInput = {
    id?: string
    userId: string
    rank: number
  }

  export type LeaderBoardCreateOrConnectWithoutContestInput = {
    where: LeaderBoardWhereUniqueInput
    create: XOR<LeaderBoardCreateWithoutContestInput, LeaderBoardUncheckedCreateWithoutContestInput>
  }

  export type LeaderBoardCreateManyContestInputEnvelope = {
    data: LeaderBoardCreateManyContestInput | LeaderBoardCreateManyContestInput[]
    skipDuplicates?: boolean
  }

  export type ContestToChallengeMappingUpsertWithWhereUniqueWithoutContestsInput = {
    where: ContestToChallengeMappingWhereUniqueInput
    update: XOR<ContestToChallengeMappingUpdateWithoutContestsInput, ContestToChallengeMappingUncheckedUpdateWithoutContestsInput>
    create: XOR<ContestToChallengeMappingCreateWithoutContestsInput, ContestToChallengeMappingUncheckedCreateWithoutContestsInput>
  }

  export type ContestToChallengeMappingUpdateWithWhereUniqueWithoutContestsInput = {
    where: ContestToChallengeMappingWhereUniqueInput
    data: XOR<ContestToChallengeMappingUpdateWithoutContestsInput, ContestToChallengeMappingUncheckedUpdateWithoutContestsInput>
  }

  export type ContestToChallengeMappingUpdateManyWithWhereWithoutContestsInput = {
    where: ContestToChallengeMappingScalarWhereInput
    data: XOR<ContestToChallengeMappingUpdateManyMutationInput, ContestToChallengeMappingUncheckedUpdateManyWithoutContestsInput>
  }

  export type ContestToChallengeMappingScalarWhereInput = {
    AND?: ContestToChallengeMappingScalarWhereInput | ContestToChallengeMappingScalarWhereInput[]
    OR?: ContestToChallengeMappingScalarWhereInput[]
    NOT?: ContestToChallengeMappingScalarWhereInput | ContestToChallengeMappingScalarWhereInput[]
    id?: StringFilter<"ContestToChallengeMapping"> | string
    contestId?: StringFilter<"ContestToChallengeMapping"> | string
    challengeId?: StringFilter<"ContestToChallengeMapping"> | string
    index?: IntFilter<"ContestToChallengeMapping"> | number
  }

  export type LeaderBoardUpsertWithWhereUniqueWithoutContestInput = {
    where: LeaderBoardWhereUniqueInput
    update: XOR<LeaderBoardUpdateWithoutContestInput, LeaderBoardUncheckedUpdateWithoutContestInput>
    create: XOR<LeaderBoardCreateWithoutContestInput, LeaderBoardUncheckedCreateWithoutContestInput>
  }

  export type LeaderBoardUpdateWithWhereUniqueWithoutContestInput = {
    where: LeaderBoardWhereUniqueInput
    data: XOR<LeaderBoardUpdateWithoutContestInput, LeaderBoardUncheckedUpdateWithoutContestInput>
  }

  export type LeaderBoardUpdateManyWithWhereWithoutContestInput = {
    where: LeaderBoardScalarWhereInput
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyWithoutContestInput>
  }

  export type ContestCreateWithoutContestToChallengeMappingInput = {
    id?: string
    title: string
    startTime: Date | string
    leaderboard?: LeaderBoardCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutContestToChallengeMappingInput = {
    id?: string
    title: string
    startTime: Date | string
    leaderboard?: LeaderBoardUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutContestToChallengeMappingInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutContestToChallengeMappingInput, ContestUncheckedCreateWithoutContestToChallengeMappingInput>
  }

  export type ChallengeCreateWithoutContestToChallengeMappingInput = {
    id?: string
    title: string
    notionDocId: string
    contestId: string
    maxPoints: number
  }

  export type ChallengeUncheckedCreateWithoutContestToChallengeMappingInput = {
    id?: string
    title: string
    notionDocId: string
    contestId: string
    maxPoints: number
  }

  export type ChallengeCreateOrConnectWithoutContestToChallengeMappingInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutContestToChallengeMappingInput, ChallengeUncheckedCreateWithoutContestToChallengeMappingInput>
  }

  export type SubmissionCreateWithoutContestToChallengeMappingInput = {
    id?: string
    submissions: string
    points: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutContestToChallengeMappingInput = {
    id?: string
    submissions: string
    userId: string
    points: number
    createdAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutContestToChallengeMappingInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutContestToChallengeMappingInput, SubmissionUncheckedCreateWithoutContestToChallengeMappingInput>
  }

  export type SubmissionCreateManyContestToChallengeMappingInputEnvelope = {
    data: SubmissionCreateManyContestToChallengeMappingInput | SubmissionCreateManyContestToChallengeMappingInput[]
    skipDuplicates?: boolean
  }

  export type ContestUpsertWithoutContestToChallengeMappingInput = {
    update: XOR<ContestUpdateWithoutContestToChallengeMappingInput, ContestUncheckedUpdateWithoutContestToChallengeMappingInput>
    create: XOR<ContestCreateWithoutContestToChallengeMappingInput, ContestUncheckedCreateWithoutContestToChallengeMappingInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutContestToChallengeMappingInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutContestToChallengeMappingInput, ContestUncheckedUpdateWithoutContestToChallengeMappingInput>
  }

  export type ContestUpdateWithoutContestToChallengeMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderboard?: LeaderBoardUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutContestToChallengeMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderboard?: LeaderBoardUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ChallengeUpsertWithoutContestToChallengeMappingInput = {
    update: XOR<ChallengeUpdateWithoutContestToChallengeMappingInput, ChallengeUncheckedUpdateWithoutContestToChallengeMappingInput>
    create: XOR<ChallengeCreateWithoutContestToChallengeMappingInput, ChallengeUncheckedCreateWithoutContestToChallengeMappingInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutContestToChallengeMappingInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutContestToChallengeMappingInput, ChallengeUncheckedUpdateWithoutContestToChallengeMappingInput>
  }

  export type ChallengeUpdateWithoutContestToChallengeMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notionDocId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeUncheckedUpdateWithoutContestToChallengeMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notionDocId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    maxPoints?: IntFieldUpdateOperationsInput | number
  }

  export type SubmissionUpsertWithWhereUniqueWithoutContestToChallengeMappingInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutContestToChallengeMappingInput, SubmissionUncheckedUpdateWithoutContestToChallengeMappingInput>
    create: XOR<SubmissionCreateWithoutContestToChallengeMappingInput, SubmissionUncheckedCreateWithoutContestToChallengeMappingInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutContestToChallengeMappingInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutContestToChallengeMappingInput, SubmissionUncheckedUpdateWithoutContestToChallengeMappingInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutContestToChallengeMappingInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutContestToChallengeMappingInput>
  }

  export type ContestToChallengeMappingCreateWithoutChallengeInput = {
    id?: string
    index: number
    contests: ContestCreateNestedOneWithoutContestToChallengeMappingInput
    submissions?: SubmissionCreateNestedManyWithoutContestToChallengeMappingInput
  }

  export type ContestToChallengeMappingUncheckedCreateWithoutChallengeInput = {
    id?: string
    contestId: string
    index: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutContestToChallengeMappingInput
  }

  export type ContestToChallengeMappingCreateOrConnectWithoutChallengeInput = {
    where: ContestToChallengeMappingWhereUniqueInput
    create: XOR<ContestToChallengeMappingCreateWithoutChallengeInput, ContestToChallengeMappingUncheckedCreateWithoutChallengeInput>
  }

  export type ContestToChallengeMappingCreateManyChallengeInputEnvelope = {
    data: ContestToChallengeMappingCreateManyChallengeInput | ContestToChallengeMappingCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type ContestToChallengeMappingUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ContestToChallengeMappingWhereUniqueInput
    update: XOR<ContestToChallengeMappingUpdateWithoutChallengeInput, ContestToChallengeMappingUncheckedUpdateWithoutChallengeInput>
    create: XOR<ContestToChallengeMappingCreateWithoutChallengeInput, ContestToChallengeMappingUncheckedCreateWithoutChallengeInput>
  }

  export type ContestToChallengeMappingUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ContestToChallengeMappingWhereUniqueInput
    data: XOR<ContestToChallengeMappingUpdateWithoutChallengeInput, ContestToChallengeMappingUncheckedUpdateWithoutChallengeInput>
  }

  export type ContestToChallengeMappingUpdateManyWithWhereWithoutChallengeInput = {
    where: ContestToChallengeMappingScalarWhereInput
    data: XOR<ContestToChallengeMappingUpdateManyMutationInput, ContestToChallengeMappingUncheckedUpdateManyWithoutChallengeInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    leaderboard?: LeaderBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    leaderboard?: LeaderBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type ContestToChallengeMappingCreateWithoutSubmissionsInput = {
    id?: string
    index: number
    contests: ContestCreateNestedOneWithoutContestToChallengeMappingInput
    challenge: ChallengeCreateNestedOneWithoutContestToChallengeMappingInput
  }

  export type ContestToChallengeMappingUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    contestId: string
    challengeId: string
    index: number
  }

  export type ContestToChallengeMappingCreateOrConnectWithoutSubmissionsInput = {
    where: ContestToChallengeMappingWhereUniqueInput
    create: XOR<ContestToChallengeMappingCreateWithoutSubmissionsInput, ContestToChallengeMappingUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    leaderboard?: LeaderBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    leaderboard?: LeaderBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContestToChallengeMappingUpsertWithoutSubmissionsInput = {
    update: XOR<ContestToChallengeMappingUpdateWithoutSubmissionsInput, ContestToChallengeMappingUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ContestToChallengeMappingCreateWithoutSubmissionsInput, ContestToChallengeMappingUncheckedCreateWithoutSubmissionsInput>
    where?: ContestToChallengeMappingWhereInput
  }

  export type ContestToChallengeMappingUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ContestToChallengeMappingWhereInput
    data: XOR<ContestToChallengeMappingUpdateWithoutSubmissionsInput, ContestToChallengeMappingUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ContestToChallengeMappingUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    contests?: ContestUpdateOneRequiredWithoutContestToChallengeMappingNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutContestToChallengeMappingNestedInput
  }

  export type ContestToChallengeMappingUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type ContestCreateWithoutLeaderboardInput = {
    id?: string
    title: string
    startTime: Date | string
    contestToChallengeMapping?: ContestToChallengeMappingCreateNestedManyWithoutContestsInput
  }

  export type ContestUncheckedCreateWithoutLeaderboardInput = {
    id?: string
    title: string
    startTime: Date | string
    contestToChallengeMapping?: ContestToChallengeMappingUncheckedCreateNestedManyWithoutContestsInput
  }

  export type ContestCreateOrConnectWithoutLeaderboardInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutLeaderboardInput, ContestUncheckedCreateWithoutLeaderboardInput>
  }

  export type UserCreateWithoutLeaderboardInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    submissions?: SubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeaderboardInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeaderboardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaderboardInput, UserUncheckedCreateWithoutLeaderboardInput>
  }

  export type ContestUpsertWithoutLeaderboardInput = {
    update: XOR<ContestUpdateWithoutLeaderboardInput, ContestUncheckedUpdateWithoutLeaderboardInput>
    create: XOR<ContestCreateWithoutLeaderboardInput, ContestUncheckedCreateWithoutLeaderboardInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutLeaderboardInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutLeaderboardInput, ContestUncheckedUpdateWithoutLeaderboardInput>
  }

  export type ContestUpdateWithoutLeaderboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    contestToChallengeMapping?: ContestToChallengeMappingUpdateManyWithoutContestsNestedInput
  }

  export type ContestUncheckedUpdateWithoutLeaderboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    contestToChallengeMapping?: ContestToChallengeMappingUncheckedUpdateManyWithoutContestsNestedInput
  }

  export type UserUpsertWithoutLeaderboardInput = {
    update: XOR<UserUpdateWithoutLeaderboardInput, UserUncheckedUpdateWithoutLeaderboardInput>
    create: XOR<UserCreateWithoutLeaderboardInput, UserUncheckedCreateWithoutLeaderboardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaderboardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaderboardInput, UserUncheckedUpdateWithoutLeaderboardInput>
  }

  export type UserUpdateWithoutLeaderboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaderboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LeaderBoardCreateManyUserInput = {
    id?: string
    contestId: string
    rank: number
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    submissions: string
    contestToChallengeMappingId: string
    points: number
    createdAt?: Date | string
  }

  export type LeaderBoardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    contest?: ContestUpdateOneRequiredWithoutLeaderboardNestedInput
  }

  export type LeaderBoardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type LeaderBoardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestToChallengeMapping?: ContestToChallengeMappingUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    contestToChallengeMappingId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    contestToChallengeMappingId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestToChallengeMappingCreateManyContestsInput = {
    id?: string
    challengeId: string
    index: number
  }

  export type LeaderBoardCreateManyContestInput = {
    id?: string
    userId: string
    rank: number
  }

  export type ContestToChallengeMappingUpdateWithoutContestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    challenge?: ChallengeUpdateOneRequiredWithoutContestToChallengeMappingNestedInput
    submissions?: SubmissionUpdateManyWithoutContestToChallengeMappingNestedInput
  }

  export type ContestToChallengeMappingUncheckedUpdateWithoutContestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutContestToChallengeMappingNestedInput
  }

  export type ContestToChallengeMappingUncheckedUpdateManyWithoutContestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }

  export type LeaderBoardUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLeaderboardNestedInput
  }

  export type LeaderBoardUncheckedUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type LeaderBoardUncheckedUpdateManyWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type SubmissionCreateManyContestToChallengeMappingInput = {
    id?: string
    submissions: string
    userId: string
    points: number
    createdAt?: Date | string
  }

  export type SubmissionUpdateWithoutContestToChallengeMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutContestToChallengeMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutContestToChallengeMappingInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissions?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestToChallengeMappingCreateManyChallengeInput = {
    id?: string
    contestId: string
    index: number
  }

  export type ContestToChallengeMappingUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    contests?: ContestUpdateOneRequiredWithoutContestToChallengeMappingNestedInput
    submissions?: SubmissionUpdateManyWithoutContestToChallengeMappingNestedInput
  }

  export type ContestToChallengeMappingUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutContestToChallengeMappingNestedInput
  }

  export type ContestToChallengeMappingUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}