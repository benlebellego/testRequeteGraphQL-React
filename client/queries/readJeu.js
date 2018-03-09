import gql from "graphql-tag";
export default gql`
query ReadJeu($id: ID!){
  jeu(id: $id){
    id,
    titre,
    style,
    description
  }
}
`;
