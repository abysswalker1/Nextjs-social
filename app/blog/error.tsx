'use client';

export default function Error({error}: {error: Error}) {
  return (
    <h3>Ошибка: {error.message}</h3>
  )
};
