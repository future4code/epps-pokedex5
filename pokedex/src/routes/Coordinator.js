export function goToHome(history) {
  history.push("/");
}

export function goToPokedex(history) {
  history.push("/pokedex");
}

export function goToPokemonDetail(history, id) {
  history.push(`/DetailsPage/${id}`);
}
