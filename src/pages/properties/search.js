import { useState, useEffect } from "react";
import Cards from "../../components/properties/Cards";
import PaginationComponent from "../../components/properties/PaginationComponent";
import Advertisement from "../../components/properties/Advertisement";
import { Box } from "@mui/material";
import axios from "axios";
import Filter from "../../components/properties/Filter";
import PropertyNotFound from "../../components/properties/PropertyNotExist";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
export default function Search() {
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    priceRange: [1000, 100000000],
  });

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterKey, setFilterKey] = useState(0);
  const limit =6;
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/properties/get", {
          params: {
            city: filters.city,
            type: filters.type,
            minPrice: filters.priceRange[0],
            maxPrice: filters.priceRange[1],
            page: page,
            limit: limit,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        setPropertyData(
          response.data.successMessage.data.allProperties.properties
        );
        setTotalPage(
          Math.ceil(response.data.successMessage.data.allProperties.noOfProperty/limit)
        );
      } catch (error) {
        console.error("Error fetching property data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [filters, page]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleFilterReset = () => {
    setFilters({
      city: "",
      type: "",
      priceRange: [1000, 100000000],
    });
    setPage(1);
    setFilterKey((prevKey) => prevKey + 1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <Box>
      <Box><Navbar/></Box>
      <Box sx={{marginTop:"80px",minHight:"100vh"}}>
        <Filter
          key={filterKey}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <Box sx={{ paddingTop:{xs:0,md:16}}}>
          {loading ? (
            <p>Loading properties...</p>
          ) : propertyData.length > 0 ? (
            propertyData.map((data, index) => (
              <Cards key={index} property={data} index={index} />
            ))
          ) : (
            <PropertyNotFound
              setPage={setPage}
              handleFilterReset={handleFilterReset}
            />
          )}
        </Box>
        {propertyData.length > 0 && (
          <PaginationComponent totalPage={totalPage} onPageChange={handlePageChange} />
        )}
        <Advertisement />
      </Box>
      <Box><Footer/></Box>
    </Box>
  );
}
