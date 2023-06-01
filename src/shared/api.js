const apiBase = "https://baconipsum.com/api/?type=meat-and-filler&paras=1";

async function getResponse() {
  const res = await fetch(apiBase);

  if (!res.ok) {
    throw new Error(`Couldn't fetch URL, received ${res.status}`);
  }

  const body = await res.json();
  return body;
}

const getText = async () => {
  const res = await getResponse();
  return res;
};

export default getText;
