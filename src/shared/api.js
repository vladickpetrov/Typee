async function getResponse(sentences) {
  const res = await fetch(
    `https://baconipsum.com/api/?type=meat-and-filler&sentences=${sentences}`
  );

  if (!res.ok) {
    throw new Error(`Couldn't fetch URL, received ${res.status}`);
  }

  const body = await res.json();
  return body;
}

const getText = async (sentences) => {
  const res = await getResponse(sentences);
  return res;
};

export default getText;
