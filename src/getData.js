export function* genItems(count = 10000) {
  for (let i = 0; i < count; i += 1) {
    yield `Item ${i}`;
  }
}

export function* filter(gen, func) {
  for (const item of gen) {
    if (func(item)) { yield item; }
  }
}

export function* map(gen, func) {
  for (const item of gen) {
    yield func(item);
  }
}

export function* limit(gen, len) {
  let taken = 0;

  for (const item of gen) {
    if (taken++ < len) {
      yield item;
    } else {
      return;
    }
  }
}

export async function getData(term) {
  const options = [
    ...limit(
      map(
        filter(genItems(), x => x.indexOf(term) !== -1),
        x => ({ value: x, label: x })
      ),
      10
    )
  ]

  console.log('Result for calling getData with term', term, 'is', options)

  return {
    options
  }
}