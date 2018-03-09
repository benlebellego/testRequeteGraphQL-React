import gql from "graphql-tag";
export default gql`
{
  jeux{
    id,
    titre,
    style
  }
}
`;
