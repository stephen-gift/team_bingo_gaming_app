// pages/docs/rbinput.tsx
import React from "react";

const RBInputDoc = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-[#00222E] mb-4">
        RBInput Component
      </h1>
      <p className="text-gray-700 mb-4">
        The{" "}
        <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
          RBInput
        </code>{" "}
        component is a versatile input field designed to enhance user
        interaction within forms. It integrates seamlessly with various UI
        elements, providing flexibility for labels, error messages, and helper
        text. Built with React and TypeScript, this component is styled with
        modern design principles to ensure a consistent and accessible user
        experience.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#00222E] mb-2">
        Features
      </h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>
          <strong>Customizable Labels</strong>: Easily add labels to describe
          the input field.
        </li>
        <li>
          <strong>Error Handling</strong>: Display error messages to guide users
          on input validation issues.
        </li>
        <li>
          <strong>Helper Text</strong>: Provide additional context or
          instructions with helper text.
        </li>
        <li>
          <strong>Styling</strong>: Styled with a border, background, and
          rounded corners for a polished look.
        </li>
        <li>
          <strong>Accessibility</strong>: Includes{" "}
          <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
            aria-invalid
          </code>{" "}
          attribute to support assistive technologies.
        </li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#00222E] mb-2">
        Props
      </h2>
      <table className="w-full border-collapse border border-gray-200 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
              Prop
            </th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
              Type
            </th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
              Description
            </th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
              Example
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">label</td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">
              Text to be displayed as the label for the input field.
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
                &quot;Username&quot;
              </code>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">error</td>
            <td className="border border-gray-300 px-4 py-2">
              string | React.ReactNode
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Error message to be shown if there is a validation issue. Can be a
              string or a React node.
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
                &quot;Username is required&quot;
              </code>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">helperText</td>
            <td className="border border-gray-300 px-4 py-2">
              string | React.ReactNode
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Additional helper text to assist users. Can be a string or a React
              node.
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
                &quot;This will be your login username &quot;
              </code>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">className</td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">
              Custom CSS class names to apply additional styles.
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
                &quot;custom-class &quot;
              </code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#00222E] mb-2">
        Usage
      </h2>
      <p className="text-gray-700 mb-4">
        Here is an example of how to use the{" "}
        <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
          RBInput
        </code>{" "}
        component within a React application:
      </p>
      <div className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre>
          <code>
            {`import React from "react";
import RBInput from "./RBInput";

const MyForm: React.FC = () => {
  return (
    <form>
      <RBInput
        label="Email Address"
        placeholder="Enter your email"
        error="Please enter a valid email address"
        helperText="We'll never share your email with anyone else."
      />
      {/* Add more input fields or form elements here */}
    </form>
  );
};

export default MyForm;`}
          </code>
        </pre>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#00222E] mb-2">
        Styling
      </h2>
      <p className="text-gray-700 mb-4">
        The{" "}
        <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
          RBInput
        </code>{" "}
        component includes default styling:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>
          <strong>Padding</strong>:{" "}
          <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
            p-4
          </code>
        </li>
        <li>
          <strong>Border</strong>:{" "}
          <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
            1px solid #00222E
          </code>
        </li>
        <li>
          <strong>Background</strong>:{" "}
          <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
            #FFFDFD
          </code>
        </li>
        <li>
          <strong>Border Radius</strong>:{" "}
          <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
            8px
          </code>
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        Custom styles can be applied using the{" "}
        <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
          className
        </code>{" "}
        prop to extend or override the default styles.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#00222E] mb-2">
        Accessibility
      </h2>
      <p className="text-gray-700 mb-4">
        The component includes the{" "}
        <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
          aria-invalid
        </code>{" "}
        attribute to indicate when the input is invalid. This improves
        accessibility for users relying on assistive technologies.
      </p>
    </div>
  );
};

export default RBInputDoc;
