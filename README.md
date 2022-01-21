# ChoreChamps

GQL Test Repo

Default expo typescript tabbed template, slightly reorganized and hooked into hasura with supporting libs.

Quick functional integration with:
- Hasura in docker
- graphql-request
- graphql-codegen


Start the docker image: **yarn hasura:up**


Kick off graphql-codegen: **yarn gql-generate** or **yarn gql-generate-watch**

**TODO**: Add migration/initial schema and populate some data for postgres to use this from scratch.
