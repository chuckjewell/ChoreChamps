# ChoreChamps

Default react-native expo typescript tabbed template, slightly reorganized and hooked into hasura with supporting libs.

- Hasura in docker
- graphql-request
- graphql-codegen (auto-generate types, hooks and resolvers based on the hasura project) 


**Start the docker image:** yarn hasura:up


**Kick off graphql-codegen:** 
- yarn gql-generate OR
- yarn gql-generate-watch


**Hasura/postgres setup and migration scripts:**
- yarn hasura:migrate-init
- yarn hasura:create-seeds
- yarn hasura:apply-seeds
