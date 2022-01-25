import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "task" */
  delete_task?: Maybe<Task_Mutation_Response>;
  /** delete single row from the table: "task" */
  delete_task_by_pk?: Maybe<Task>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "task" */
  insert_task?: Maybe<Task_Mutation_Response>;
  /** insert a single row into the table: "task" */
  insert_task_one?: Maybe<Task>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "task" */
  update_task?: Maybe<Task_Mutation_Response>;
  /** update single row of the table: "task" */
  update_task_by_pk?: Maybe<Task>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_TaskArgs = {
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Task_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_TaskArgs = {
  objects: Array<Task_Insert_Input>;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_OneArgs = {
  object: Task_Insert_Input;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TaskArgs = {
  _inc?: InputMaybe<Task_Inc_Input>;
  _set?: InputMaybe<Task_Set_Input>;
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Task_By_PkArgs = {
  _inc?: InputMaybe<Task_Inc_Input>;
  _set?: InputMaybe<Task_Set_Input>;
  pk_columns: Task_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "task" */
export type Task = {
  __typename?: 'task';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  rating: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user: Scalars['uuid'];
  /** An object relationship */
  userByUser: User;
};

/** aggregated selection of "task" */
export type Task_Aggregate = {
  __typename?: 'task_aggregate';
  aggregate?: Maybe<Task_Aggregate_Fields>;
  nodes: Array<Task>;
};

/** aggregate fields of "task" */
export type Task_Aggregate_Fields = {
  __typename?: 'task_aggregate_fields';
  avg?: Maybe<Task_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Task_Max_Fields>;
  min?: Maybe<Task_Min_Fields>;
  stddev?: Maybe<Task_Stddev_Fields>;
  stddev_pop?: Maybe<Task_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Task_Stddev_Samp_Fields>;
  sum?: Maybe<Task_Sum_Fields>;
  var_pop?: Maybe<Task_Var_Pop_Fields>;
  var_samp?: Maybe<Task_Var_Samp_Fields>;
  variance?: Maybe<Task_Variance_Fields>;
};


/** aggregate fields of "task" */
export type Task_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Task_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "task" */
export type Task_Aggregate_Order_By = {
  avg?: InputMaybe<Task_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_Max_Order_By>;
  min?: InputMaybe<Task_Min_Order_By>;
  stddev?: InputMaybe<Task_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Task_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Task_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Task_Sum_Order_By>;
  var_pop?: InputMaybe<Task_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Task_Var_Samp_Order_By>;
  variance?: InputMaybe<Task_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "task" */
export type Task_Arr_Rel_Insert_Input = {
  data: Array<Task_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** aggregate avg on columns */
export type Task_Avg_Fields = {
  __typename?: 'task_avg_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "task" */
export type Task_Avg_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "task". All fields are combined with a logical 'AND'. */
export type Task_Bool_Exp = {
  _and?: InputMaybe<Array<Task_Bool_Exp>>;
  _not?: InputMaybe<Task_Bool_Exp>;
  _or?: InputMaybe<Array<Task_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  userByUser?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "task" */
export enum Task_Constraint {
  /** unique or primary key constraint */
  TaskPkey = 'task_pkey'
}

/** input type for incrementing numeric columns in table "task" */
export type Task_Inc_Input = {
  rating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "task" */
export type Task_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  rating?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
  userByUser?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Task_Max_Fields = {
  __typename?: 'task_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "task" */
export type Task_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Task_Min_Fields = {
  __typename?: 'task_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "task" */
export type Task_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "task" */
export type Task_Mutation_Response = {
  __typename?: 'task_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Task>;
};

/** on conflict condition type for table "task" */
export type Task_On_Conflict = {
  constraint: Task_Constraint;
  update_columns?: Array<Task_Update_Column>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** Ordering options when selecting data from "task". */
export type Task_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  userByUser?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: task */
export type Task_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "task" */
export enum Task_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "task" */
export type Task_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  rating?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Task_Stddev_Fields = {
  __typename?: 'task_stddev_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "task" */
export type Task_Stddev_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Task_Stddev_Pop_Fields = {
  __typename?: 'task_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "task" */
export type Task_Stddev_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Task_Stddev_Samp_Fields = {
  __typename?: 'task_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "task" */
export type Task_Stddev_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Task_Sum_Fields = {
  __typename?: 'task_sum_fields';
  rating?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "task" */
export type Task_Sum_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "task" */
export enum Task_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** aggregate var_pop on columns */
export type Task_Var_Pop_Fields = {
  __typename?: 'task_var_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "task" */
export type Task_Var_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Task_Var_Samp_Fields = {
  __typename?: 'task_var_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "task" */
export type Task_Var_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Task_Variance_Fields = {
  __typename?: 'task_variance_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "task" */
export type Task_Variance_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  tasks: Array<Task>;
  /** An aggregate relationship */
  tasks_aggregate: Task_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "user" */
export type UserTasksArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tasks?: InputMaybe<Task_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UserDetailsFragment = { __typename?: 'user', id: any, name: string, email: string, updated_at: any, created_at: any };

export type TaskDetailsFragment = { __typename?: 'task', id: any, description?: string | null | undefined, rating: number, title: string, created_at: any, updated_at: any, user: any };

export type UsersQueryVariables = Exact<{
  offset?: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type UsersQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: any, name: string, email: string, updated_at: any, created_at: any }> };

export type UserDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserDetailsQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: any, name: string, email: string, updated_at: any, created_at: any, tasks: Array<{ __typename?: 'task', id: any, description?: string | null | undefined, rating: number, title: string, created_at: any, updated_at: any, user: any }> }> };

export type TasksQueryVariables = Exact<{
  offset?: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type TasksQuery = { __typename?: 'query_root', task: Array<{ __typename?: 'task', id: any, description?: string | null | undefined, rating: number, title: string, created_at: any, updated_at: any, user: any }> };

export type TaskDetailsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TaskDetailsQuery = { __typename?: 'query_root', task: Array<{ __typename?: 'task', id: any, description?: string | null | undefined, rating: number, title: string, created_at: any, updated_at: any, user: any, userByUser: { __typename?: 'user', id: any, name: string, email: string, updated_at: any, created_at: any } }> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  task: ResolverTypeWrapper<Task>;
  task_aggregate: ResolverTypeWrapper<Task_Aggregate>;
  task_aggregate_fields: ResolverTypeWrapper<Task_Aggregate_Fields>;
  task_aggregate_order_by: Task_Aggregate_Order_By;
  task_arr_rel_insert_input: Task_Arr_Rel_Insert_Input;
  task_avg_fields: ResolverTypeWrapper<Task_Avg_Fields>;
  task_avg_order_by: Task_Avg_Order_By;
  task_bool_exp: Task_Bool_Exp;
  task_constraint: Task_Constraint;
  task_inc_input: Task_Inc_Input;
  task_insert_input: Task_Insert_Input;
  task_max_fields: ResolverTypeWrapper<Task_Max_Fields>;
  task_max_order_by: Task_Max_Order_By;
  task_min_fields: ResolverTypeWrapper<Task_Min_Fields>;
  task_min_order_by: Task_Min_Order_By;
  task_mutation_response: ResolverTypeWrapper<Task_Mutation_Response>;
  task_on_conflict: Task_On_Conflict;
  task_order_by: Task_Order_By;
  task_pk_columns_input: Task_Pk_Columns_Input;
  task_select_column: Task_Select_Column;
  task_set_input: Task_Set_Input;
  task_stddev_fields: ResolverTypeWrapper<Task_Stddev_Fields>;
  task_stddev_order_by: Task_Stddev_Order_By;
  task_stddev_pop_fields: ResolverTypeWrapper<Task_Stddev_Pop_Fields>;
  task_stddev_pop_order_by: Task_Stddev_Pop_Order_By;
  task_stddev_samp_fields: ResolverTypeWrapper<Task_Stddev_Samp_Fields>;
  task_stddev_samp_order_by: Task_Stddev_Samp_Order_By;
  task_sum_fields: ResolverTypeWrapper<Task_Sum_Fields>;
  task_sum_order_by: Task_Sum_Order_By;
  task_update_column: Task_Update_Column;
  task_var_pop_fields: ResolverTypeWrapper<Task_Var_Pop_Fields>;
  task_var_pop_order_by: Task_Var_Pop_Order_By;
  task_var_samp_fields: ResolverTypeWrapper<Task_Var_Samp_Fields>;
  task_var_samp_order_by: Task_Var_Samp_Order_By;
  task_variance_fields: ResolverTypeWrapper<Task_Variance_Fields>;
  task_variance_order_by: Task_Variance_Order_By;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  user: ResolverTypeWrapper<User>;
  user_aggregate: ResolverTypeWrapper<User_Aggregate>;
  user_aggregate_fields: ResolverTypeWrapper<User_Aggregate_Fields>;
  user_bool_exp: User_Bool_Exp;
  user_constraint: User_Constraint;
  user_insert_input: User_Insert_Input;
  user_max_fields: ResolverTypeWrapper<User_Max_Fields>;
  user_min_fields: ResolverTypeWrapper<User_Min_Fields>;
  user_mutation_response: ResolverTypeWrapper<User_Mutation_Response>;
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input;
  user_on_conflict: User_On_Conflict;
  user_order_by: User_Order_By;
  user_pk_columns_input: User_Pk_Columns_Input;
  user_select_column: User_Select_Column;
  user_set_input: User_Set_Input;
  user_update_column: User_Update_Column;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  task: Task;
  task_aggregate: Task_Aggregate;
  task_aggregate_fields: Task_Aggregate_Fields;
  task_aggregate_order_by: Task_Aggregate_Order_By;
  task_arr_rel_insert_input: Task_Arr_Rel_Insert_Input;
  task_avg_fields: Task_Avg_Fields;
  task_avg_order_by: Task_Avg_Order_By;
  task_bool_exp: Task_Bool_Exp;
  task_inc_input: Task_Inc_Input;
  task_insert_input: Task_Insert_Input;
  task_max_fields: Task_Max_Fields;
  task_max_order_by: Task_Max_Order_By;
  task_min_fields: Task_Min_Fields;
  task_min_order_by: Task_Min_Order_By;
  task_mutation_response: Task_Mutation_Response;
  task_on_conflict: Task_On_Conflict;
  task_order_by: Task_Order_By;
  task_pk_columns_input: Task_Pk_Columns_Input;
  task_set_input: Task_Set_Input;
  task_stddev_fields: Task_Stddev_Fields;
  task_stddev_order_by: Task_Stddev_Order_By;
  task_stddev_pop_fields: Task_Stddev_Pop_Fields;
  task_stddev_pop_order_by: Task_Stddev_Pop_Order_By;
  task_stddev_samp_fields: Task_Stddev_Samp_Fields;
  task_stddev_samp_order_by: Task_Stddev_Samp_Order_By;
  task_sum_fields: Task_Sum_Fields;
  task_sum_order_by: Task_Sum_Order_By;
  task_var_pop_fields: Task_Var_Pop_Fields;
  task_var_pop_order_by: Task_Var_Pop_Order_By;
  task_var_samp_fields: Task_Var_Samp_Fields;
  task_var_samp_order_by: Task_Var_Samp_Order_By;
  task_variance_fields: Task_Variance_Fields;
  task_variance_order_by: Task_Variance_Order_By;
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  user: User;
  user_aggregate: User_Aggregate;
  user_aggregate_fields: User_Aggregate_Fields;
  user_bool_exp: User_Bool_Exp;
  user_insert_input: User_Insert_Input;
  user_max_fields: User_Max_Fields;
  user_min_fields: User_Min_Fields;
  user_mutation_response: User_Mutation_Response;
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input;
  user_on_conflict: User_On_Conflict;
  user_order_by: User_Order_By;
  user_pk_columns_input: User_Pk_Columns_Input;
  user_set_input: User_Set_Input;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_task?: Resolver<Maybe<ResolversTypes['task_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_TaskArgs, 'where'>>;
  delete_task_by_pk?: Resolver<Maybe<ResolversTypes['task']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Task_By_PkArgs, 'id'>>;
  delete_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UserArgs, 'where'>>;
  delete_user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_By_PkArgs, 'id'>>;
  insert_task?: Resolver<Maybe<ResolversTypes['task_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_TaskArgs, 'objects'>>;
  insert_task_one?: Resolver<Maybe<ResolversTypes['task']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Task_OneArgs, 'object'>>;
  insert_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UserArgs, 'objects'>>;
  insert_user_one?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_OneArgs, 'object'>>;
  update_task?: Resolver<Maybe<ResolversTypes['task_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_TaskArgs, 'where'>>;
  update_task_by_pk?: Resolver<Maybe<ResolversTypes['task']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Task_By_PkArgs, 'pk_columns'>>;
  update_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UserArgs, 'where'>>;
  update_user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  task?: Resolver<Array<ResolversTypes['task']>, ParentType, ContextType, RequireFields<Query_RootTaskArgs, never>>;
  task_aggregate?: Resolver<ResolversTypes['task_aggregate'], ParentType, ContextType, RequireFields<Query_RootTask_AggregateArgs, never>>;
  task_by_pk?: Resolver<Maybe<ResolversTypes['task']>, ParentType, ContextType, RequireFields<Query_RootTask_By_PkArgs, 'id'>>;
  user?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Query_RootUserArgs, never>>;
  user_aggregate?: Resolver<ResolversTypes['user_aggregate'], ParentType, ContextType, RequireFields<Query_RootUser_AggregateArgs, never>>;
  user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Query_RootUser_By_PkArgs, 'id'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  task?: SubscriptionResolver<Array<ResolversTypes['task']>, "task", ParentType, ContextType, RequireFields<Subscription_RootTaskArgs, never>>;
  task_aggregate?: SubscriptionResolver<ResolversTypes['task_aggregate'], "task_aggregate", ParentType, ContextType, RequireFields<Subscription_RootTask_AggregateArgs, never>>;
  task_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['task']>, "task_by_pk", ParentType, ContextType, RequireFields<Subscription_RootTask_By_PkArgs, 'id'>>;
  user?: SubscriptionResolver<Array<ResolversTypes['user']>, "user", ParentType, ContextType, RequireFields<Subscription_RootUserArgs, never>>;
  user_aggregate?: SubscriptionResolver<ResolversTypes['user_aggregate'], "user_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUser_AggregateArgs, never>>;
  user_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user']>, "user_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_By_PkArgs, 'id'>>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['task'] = ResolversParentTypes['task']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  userByUser?: Resolver<ResolversTypes['user'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_aggregate'] = ResolversParentTypes['task_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['task_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_aggregate_fields'] = ResolversParentTypes['task_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['task_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Task_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['task_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['task_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['task_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['task_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['task_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['task_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['task_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['task_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['task_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_avg_fields'] = ResolversParentTypes['task_avg_fields']> = {
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_max_fields'] = ResolversParentTypes['task_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_min_fields'] = ResolversParentTypes['task_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_mutation_response'] = ResolversParentTypes['task_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_stddev_fields'] = ResolversParentTypes['task_stddev_fields']> = {
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_stddev_pop_fields'] = ResolversParentTypes['task_stddev_pop_fields']> = {
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_stddev_samp_fields'] = ResolversParentTypes['task_stddev_samp_fields']> = {
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_sum_fields'] = ResolversParentTypes['task_sum_fields']> = {
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_var_pop_fields'] = ResolversParentTypes['task_var_pop_fields']> = {
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_var_samp_fields'] = ResolversParentTypes['task_var_samp_fields']> = {
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Task_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['task_variance_fields'] = ResolversParentTypes['task_variance_fields']> = {
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['user'] = ResolversParentTypes['user']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['task']>, ParentType, ContextType, RequireFields<UserTasksArgs, never>>;
  tasks_aggregate?: Resolver<ResolversTypes['task_aggregate'], ParentType, ContextType, RequireFields<UserTasks_AggregateArgs, never>>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate'] = ResolversParentTypes['user_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate_fields'] = ResolversParentTypes['user_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<User_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['user_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_max_fields'] = ResolversParentTypes['user_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_min_fields'] = ResolversParentTypes['user_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_mutation_response'] = ResolversParentTypes['user_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  task?: TaskResolvers<ContextType>;
  task_aggregate?: Task_AggregateResolvers<ContextType>;
  task_aggregate_fields?: Task_Aggregate_FieldsResolvers<ContextType>;
  task_avg_fields?: Task_Avg_FieldsResolvers<ContextType>;
  task_max_fields?: Task_Max_FieldsResolvers<ContextType>;
  task_min_fields?: Task_Min_FieldsResolvers<ContextType>;
  task_mutation_response?: Task_Mutation_ResponseResolvers<ContextType>;
  task_stddev_fields?: Task_Stddev_FieldsResolvers<ContextType>;
  task_stddev_pop_fields?: Task_Stddev_Pop_FieldsResolvers<ContextType>;
  task_stddev_samp_fields?: Task_Stddev_Samp_FieldsResolvers<ContextType>;
  task_sum_fields?: Task_Sum_FieldsResolvers<ContextType>;
  task_var_pop_fields?: Task_Var_Pop_FieldsResolvers<ContextType>;
  task_var_samp_fields?: Task_Var_Samp_FieldsResolvers<ContextType>;
  task_variance_fields?: Task_Variance_FieldsResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  user?: UserResolvers<ContextType>;
  user_aggregate?: User_AggregateResolvers<ContextType>;
  user_aggregate_fields?: User_Aggregate_FieldsResolvers<ContextType>;
  user_max_fields?: User_Max_FieldsResolvers<ContextType>;
  user_min_fields?: User_Min_FieldsResolvers<ContextType>;
  user_mutation_response?: User_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};

export const UserDetailsFragment = `
    fragment userDetailsFragment on user {
  id
  name
  email
  updated_at
  created_at
}
    `;
export const TaskDetailsFragment = `
    fragment taskDetailsFragment on task {
  id
  description
  rating
  title
  created_at
  updated_at
  user
}
    `;
export const UsersQueryDocument = `
    query UsersQuery($offset: Int! = 0, $limit: Int!) {
  user(offset: 0, limit: 10) {
    ...userDetailsFragment
  }
}
    ${UserDetailsFragment}`;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<UsersQuery, TError, TData>(
      ['UsersQuery', variables],
      fetcher<UsersQuery, UsersQueryVariables>(client, UsersQueryDocument, variables, headers),
      options
    );
export const useInfiniteUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      pageParamKey: keyof UsersQueryVariables,
      client: GraphQLClient,
      variables: UsersQueryVariables,
      options?: UseInfiniteQueryOptions<UsersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<UsersQuery, TError, TData>(
      ['UsersQuery.infinite', variables],
      (metaData) => fetcher<UsersQuery, UsersQueryVariables>(client, UsersQueryDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const UserDetailsQueryDocument = `
    query UserDetailsQuery($id: uuid!) {
  user(where: {id: {_eq: $id}}) {
    ...userDetailsFragment
    tasks {
      ...taskDetailsFragment
    }
  }
}
    ${UserDetailsFragment}
${TaskDetailsFragment}`;
export const useUserDetailsQuery = <
      TData = UserDetailsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: UserDetailsQueryVariables,
      options?: UseQueryOptions<UserDetailsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<UserDetailsQuery, TError, TData>(
      ['UserDetailsQuery', variables],
      fetcher<UserDetailsQuery, UserDetailsQueryVariables>(client, UserDetailsQueryDocument, variables, headers),
      options
    );
export const useInfiniteUserDetailsQuery = <
      TData = UserDetailsQuery,
      TError = unknown
    >(
      pageParamKey: keyof UserDetailsQueryVariables,
      client: GraphQLClient,
      variables: UserDetailsQueryVariables,
      options?: UseInfiniteQueryOptions<UserDetailsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<UserDetailsQuery, TError, TData>(
      ['UserDetailsQuery.infinite', variables],
      (metaData) => fetcher<UserDetailsQuery, UserDetailsQueryVariables>(client, UserDetailsQueryDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const TasksQueryDocument = `
    query TasksQuery($offset: Int! = 0, $limit: Int!) {
  task(offset: 0, limit: 10) {
    ...taskDetailsFragment
  }
}
    ${TaskDetailsFragment}`;
export const useTasksQuery = <
      TData = TasksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: TasksQueryVariables,
      options?: UseQueryOptions<TasksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<TasksQuery, TError, TData>(
      ['TasksQuery', variables],
      fetcher<TasksQuery, TasksQueryVariables>(client, TasksQueryDocument, variables, headers),
      options
    );
export const useInfiniteTasksQuery = <
      TData = TasksQuery,
      TError = unknown
    >(
      pageParamKey: keyof TasksQueryVariables,
      client: GraphQLClient,
      variables: TasksQueryVariables,
      options?: UseInfiniteQueryOptions<TasksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<TasksQuery, TError, TData>(
      ['TasksQuery.infinite', variables],
      (metaData) => fetcher<TasksQuery, TasksQueryVariables>(client, TasksQueryDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );

export const TaskDetailsQueryDocument = `
    query TaskDetailsQuery($id: uuid!) {
  task(where: {id: {_eq: $id}}) {
    ...taskDetailsFragment
    userByUser {
      ...userDetailsFragment
    }
  }
}
    ${TaskDetailsFragment}
${UserDetailsFragment}`;
export const useTaskDetailsQuery = <
      TData = TaskDetailsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: TaskDetailsQueryVariables,
      options?: UseQueryOptions<TaskDetailsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<TaskDetailsQuery, TError, TData>(
      ['TaskDetailsQuery', variables],
      fetcher<TaskDetailsQuery, TaskDetailsQueryVariables>(client, TaskDetailsQueryDocument, variables, headers),
      options
    );
export const useInfiniteTaskDetailsQuery = <
      TData = TaskDetailsQuery,
      TError = unknown
    >(
      pageParamKey: keyof TaskDetailsQueryVariables,
      client: GraphQLClient,
      variables: TaskDetailsQueryVariables,
      options?: UseInfiniteQueryOptions<TaskDetailsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<TaskDetailsQuery, TError, TData>(
      ['TaskDetailsQuery.infinite', variables],
      (metaData) => fetcher<TaskDetailsQuery, TaskDetailsQueryVariables>(client, TaskDetailsQueryDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );
