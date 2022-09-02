export const fetchAnimals = async () => {
  console.log('fetching')
  const response = await fetch('/api/animals/all');

  if(!response.ok) {
    console.log("error")
    throw new Error("Error fetching animals");
  }
  return response.json();
}

export const fetchUserAnimals = async (key) => {
  const username = key.queryKey[1]
  const response = await fetch(`/api/user/${username}/animals`);
  if(!response.ok) {
    throw new Error("Error fetching animals");
  }
  return response.json();
}

export const fetchAnimal = async (key) => {
  const id = key.queryKey[1]
  const response = await fetch(`/api/animals/${id}`)
  if(!response.ok) {
    throw new Error("Error fetching animals");
  }
  return response.json();
}
