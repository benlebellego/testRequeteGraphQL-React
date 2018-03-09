import gql from "graphql-tag";
export default gql`
mutation DeleteJeu($id: ID){
  deleteJeu(id: $id){
    id,
    titre,
    style,
    description
  }
}
`;
