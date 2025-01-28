import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Cards from "../../components/properties/Cards";
import Filter from "../../components/properties/Filter";
import PaginationComponent from "../../components/properties/PaginationComponent";
import Advertisement from "../../components/properties/Advertisement";
import PropertyNotFound from "../../components/properties/PropertyNotExist";
import { Box } from "@mui/material";

export default function Search() {
  const router = useRouter();
  const { location, type, priceRange } = router.query;

  const [filters, setFilters] = useState({
    city: location || "",
    type: type || "",
    priceRange: priceRange || [0, 20000000],
  });

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterKey, setFilterKey] = useState(0);
  const limit = 6;

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
          Math.ceil(
            response.data.successMessage.data.allProperties.noOfProperty / limit
          )
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
    router.replace(
      {
        pathname: router.pathname,
        query: {
          location: newFilters.city,
          type: newFilters.type,
          priceRange: newFilters.priceRange.join(","),
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleFilterReset = () => {
    const defaultFilters = {
      city: "",
      type: "",
      priceRange: [0, 20000000],
    };
    setFilters(defaultFilters);
    setPage(1);
    setFilterKey((prevKey) => prevKey + 1);

    // Clear the URL query parameters
    router.replace(
      {
        pathname: router.pathname,
      },
      undefined,
      { shallow: true }
    );
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);

    // Update page query in the URL dynamically
    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          page: newPage,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ marginTop: "80px", minHeight: "100vh" }}>
        <Filter
          key={filterKey}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <Box sx={{ paddingTop: { xs: 0, md: 16 } }}>
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
          <PaginationComponent
            totalPage={totalPage}
            onPageChange={handlePageChange}
          />
        )}
        <Advertisement />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}