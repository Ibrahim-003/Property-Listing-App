interface SwitchButtonProps {
    isOn?: boolean;
    onToggle?: (newState: boolean) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({isOn=false, onToggle}) => {
    const toggleSwitch = () => {
        if (onToggle) {
            onToggle(!isOn);
        }
    }

    return (
      <button
        onClick={toggleSwitch}
        role='switch'
        aria-checked={isOn}
        aria-label='Toggle switch'
        className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
          isOn ? "bg-blue-400" : "bg-gray-400"
        }`}
      >
        <span
          className={`block w-5 h-5 bg-white dark:bg-gray-200 rounded-full shadow-md transform transition-transform ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    );
}

export default SwitchButton;
