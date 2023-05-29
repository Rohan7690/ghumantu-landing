import {
    Flex, Text,
    Input, InputGroup, InputLeftElement,
    Select, Button, Stack, SimpleGrid, RadioGroup, Radio, Heading, useToast
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsCalendar, BsPeople } from "react-icons/bs";
import BudgetBreakdown from "./Budget/BudgetBreakdown";

const BudgetCalculator = (props) => {
    console.log(props)
    const [finalData, setFinalData] = useState({})
    const [user, setUser] = useState({})
    const router = useRouter()
    const toast = useToast()
    const transportaionOptions = ["bus", "cab", "train", "flight"]
    const accomodationOptions = ["hotel", "resort", "homestay", "hostel"]
    const [cookies, setCookie] = useCookies(['user'])
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(false)
    const [source, setSource] = useState("")
    const [destination, setDestination] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [numberOfPeople, setNumberOfPeople] = useState(1)
    const [typeOfTransportation, setTypeOfTransportation] = useState("")
    const [typeOfAccomodation, setTypeOfAccomodation] = useState("")
    const [budget, setBudget] = useState(null)

    const handleRadioChange = (value) => {
        setTypeOfTransportation(value);
    }
    const handleRadioChange2 = (value) => {
        setTypeOfAccomodation(value);
    }

    const handleCalculateBudget = async () => {
        if (!source || !destination || !departureDate || !returnDate || !numberOfPeople || !typeOfTransportation) {
            toast({
                title: "Please fill all the fields",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
            return
        }
        // format date in YYYY/MM/DD
        let formattedDD = departureDate.split("-").join("/")
        let formattedRD = returnDate.split("-").join("/")
        let nod = new Date(formattedRD) - new Date(formattedDD)
        nod = nod / (1000 * 3600 * 24)
        nod = nod + 1
        try {
            setLoading(true)
            let body = {
                "source": source,
                "destination": destination,
                "departureDate": formattedDD,
                "returnDate": formattedRD,
                "numberOfPeople": Number(numberOfPeople),
                "numberOfDays": Number(nod),
                "typeOfTransportation": typeOfTransportation,
                "typeOfAccomodation": ""
            }
            // calculate budget 
            const res = await getBudget(body)
            console.log(res.data)
            setBudget(res.data.data)
        }
        catch (err) {
            setLoading(false)
            console.log(err)
            toast({
                position: "top-right",
                title: "Something went wrong",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
    }
    
    return (
        <Flex direction={"column"}
            h='auto'
            w='90vw'
            m='0 auto'
            justify="center" align="center">
            {!budget &&
                <BudgetBreakdown />
            }
            <Heading as='h1' size='xl' my={5} color='gray.600'>Budget Calculator</Heading>
            <Stack my={4} spacing={8} mb={10}>
                <Stack align='center' p={5} gap={5} direction='row'>
                    <Text whiteSpace='nowrap'
                        fontSize="md" fontWeight="medium" color="gray.600">Source</Text>
                    <Select placeholder="Select destination"
                        size="md" bg="white"
                        onChange={(e) => setSource(e.target.value)}
                    >
                        {cities.map((city) => (
                            <option key={city._id} value={city.name}>{city.name}</option>
                        ))}
                    </Select>
                    <Text whiteSpace='nowrap'
                        fontSize="md" fontWeight="medium" color="gray.600">Destination</Text>
                    <Select placeholder="Select destination" size="md" bg="white"
                        onChange={(e) => setDestination(e.target.value)}
                    >
                        {cities.map((city) => (
                            <option key={city._id} value={city.name}>{city.name}</option>
                        ))}
                    </Select>
                </Stack>
                <Stack align='center' p={5} gap={5} direction='row'>
                    <Text my={2} fontSize="md" fontWeight="medium" color="gray.600">From</Text>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<BsCalendar color="gray.300" />} />
                        <Input type="date" placeholder="From" size="lg" bg="white"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                        />
                    </InputGroup>
                    <Text fontSize="md" fontWeight="medium" color="gray.600">To</Text>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<BsCalendar color="gray.300" />} />
                        <Input type="date" placeholder="To" size="lg" bg="white"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    </InputGroup>
                </Stack>
                <Stack align='center' p={5} gap={5} direction='row'>
                    <Stack w='100%'>
                        <Text fontSize="md" fontWeight="medium" color="gray.600">Type of accomodation</Text>
                        <RadioGroup display='flex'
                            alignItems='center' gap={5}
                            my={2}
                            value={typeOfAccomodation} onChange={handleRadioChange2}>
                            <SimpleGrid columns={2} rowGap={4} columnGap={4}>
                                {accomodationOptions.map((option) => (
                                    <Radio key={option} value={option}>
                                        {option}
                                    </Radio>
                                ))}
                            </SimpleGrid>
                        </RadioGroup>
                    </Stack>
                    <Stack w='100%'>
                        <Text fontSize="md" fontWeight="medium" color="gray.600">Type of transportation</Text>
                        <RadioGroup display='flex'
                            alignItems='center' gap={5}
                            my={2}
                            value={typeOfTransportation} onChange={handleRadioChange}>
                            <SimpleGrid columns={2} rowGap={4} columnGap={4}>
                                {transportaionOptions.map((option) => (
                                    <Radio key={option} value={option}>
                                        {option}
                                    </Radio>
                                ))}
                            </SimpleGrid>
                        </RadioGroup>
                    </Stack>
                </Stack>
                <Stack>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<BsPeople color="gray.300" />} />
                        <Input placeholder="Number of people" size="lg" bg="white"
                            value={numberOfPeople}
                            onFocus={(e) => e.target.select()}
                            onChange={(e) => setNumberOfPeople(e.target.value)}
                        />
                    </InputGroup>
                </Stack>
                <Button
                    _hover={{
                        bgGradient: "linear(to-l, #14cdff,#00c2ff)",
                        boxShadow: "xl",
                    }}
                    bgGradient='linear(to-r, #14cdff,#00c2ff)'
                    isLoading={loading}
                    colorScheme="blue"
                    variant="solid"
                    loadingText="Calculating"
                    onClick={() => handleCalculateBudget()}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleCalculateBudget()
                        }
                    }}
                    my={4}>
                    Calculate
                </Button>
            </Stack>
        </Flex>
    );
};

export default BudgetCalculator;
