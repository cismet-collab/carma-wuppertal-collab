// Dynamically import all .tsx, .jsx, and .js files in this directory except index.tsx/js/jsx and *.stories.tsx/js/jsx
const modules = import.meta.glob("./*.{tsx,jsx,js}", { eager: true });

const GTMComponentDictionary: Record<string, React.ComponentType<any>> = {};

for (const path in modules) {
  // Skip this file if it matches index.tsx/js/jsx or any .stories.tsx/js/jsx file
  if (
    /index\.(tsx|jsx|js)$/.test(path) ||
    /\.stories\.(tsx|jsx|js)$/.test(path)
  )
    continue;
  // Extract the filename without extension, e.g. './HelpTextDemo.tsx' -> 'HelpTextDemo'
  const match = path.match(/\.\/(.*)\.(tsx|jsx|js)$/);
  if (match && (modules[path] as any)?.default) {
    // Convert to camelCase: HelpTextDemo -> helpTextDemo
    const key = match[1].charAt(0).toLowerCase() + match[1].slice(1);
    GTMComponentDictionary[key] = (modules[path] as any).default;
  }
}

export default GTMComponentDictionary;
