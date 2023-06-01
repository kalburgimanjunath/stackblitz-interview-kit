export default function Contribute() {
  return (
    <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
      <h4 className="text-2xl font-bold">Contribute problem to community </h4>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-6 items-start">
        <label class="block">
          <span class="text-gray-700">Title</span>
          <input
            type="text"
            class="form-input mt-1 block  w-full"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700"> Difficulty</span>
          <select
            type="select"
            class="form-select mt-1 block  w-full"
            placeholder="john@example.com"
          >
            <option>Select Difficulty</option>
          </select>
        </label>
        <label class="block">
          <span class="text-gray-700"> Problem Statement</span>
          <textarea
            type="text"
            class="form-textarea mt-1 block  w-full"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700"> Solution</span>
          <textarea
            type="text"
            class="form-textarea mt-1 block  w-full"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700"> Date</span>
          <input
            type="text"
            class="form-input mt-1 block  w-full"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700"> Sample Code</span>
          <textarea
            type="text"
            class="form-textarea mt-1 block  w-full"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700"> Tags</span>
          <input
            type="text"
            class="form-input mt-1 block  w-full"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700"> Language</span>
          <input
            type="text"
            class="form-input mt-1 block  w-full"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700"> Companies</span>
          <input
            type="text"
            class="form-input mt-1 block  w-full"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700"> Slug</span>
          <input
            type="text"
            class="form-input mt-1 block  w-full"
            placeholder="john@example.com"
          />
        </label>
      </div>
      <button class="mt-2 p-2 bg-blue-700 text-gray-100 hover:bg-blue-500 text-gray-200 w-full ">
        Save
      </button>
    </div>
  );
}
