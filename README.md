# Auto complete input component

## get started

1. download repo or git clone https://github.com/viktorevstigneev/auto-Complete-input.git
2. yarn or npm install
3. npm start

<pre>
property          | type      |
------------------|-----------|----------------------------------------------------
data              | array     | [obj,num,string ...]
value             | string    | state variable
onChange          | func      | on change handler which takes in parameter value
suggestionValue   | func      | function transform (value) => value?.prop
placeHolder       | string    | string of text which shows when filed is empty
name              | string    | string name for form data
hasClearButton    | bool      | true/false display button for clearing filed value
filterType        | string    | all/start/end/middle parameter for auto complete
width:            | string    | style sting e.g "100px"
optionsBackground | string    | style string e.g "red"
optionsColor      | string    | style string e.g "black"

</pre>

## usage example

const MyApp = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (value) => {
      setInputValue(value);
    };

    const suggestionValue = (value) => value.field1;

    const handleFormSubmit = (evt) => {
    	evt.preventDefault();
    	const formData = new FormData(evt.target);
      alert(...formData)
    };

    return (
    	<form className="main" method="POST" onSubmit={handleFormSubmit}>
    		<h1 className="main__title">Test form</h1>
    		<AutoCompleteInput
    			data={[
    				{ field1: 'value1.1 value1.1 value1.1 value1.1', field2: 'value1.2' },
    				{ field1: 'value2.1 value2.1 value2.1 value2.1', field2: 'value2.2' },
    			]}
    			value={inputValue}
    			onChange={handleChange}
    			suggestionValue={suggestionValue}
    			placeHolder="Type something"
    			name="read"
    			hasClearButton={true}
    			filterType="all"
    			width="50%"
    			optionsBackground="red"
    			optionsColor="white"
    		/>
    		<button className="main__button" type="submit">
    			Get form data
    		</button>
    	</form>

    );
};

# DEMO 

git pages: 
https://viktorevstigneev.github.io/auto-Complete-input/

