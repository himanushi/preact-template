import { signal, useSignal } from "@preact/signals";

// Global state
const globalCount = signal(0);

export const Counter = () => {
  // Local state
  const localCount = useSignal(0);

  return (
    <div>
      <a href="/">Home Link</a>
      <p>Global Count: {globalCount.value}</p>
      <button
        type="button"
        onClick={() => {
          globalCount.value++;
        }}
      >
        +1
      </button>
      <p>Local Count: {localCount.value}</p>
      <button
        type="button"
        onClick={() => {
          localCount.value++;
        }}
      >
        +1
      </button>
    </div>
  );
};
