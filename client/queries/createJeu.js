import gql from "graphql-tag";
export default gql`
mutation AddJeu($titre:String, $style:String, $description:String){
  addJeu(titre:$titre, style:$style, description:$description){
    id,
    titre,
    style,
    description
  }
}
`;
