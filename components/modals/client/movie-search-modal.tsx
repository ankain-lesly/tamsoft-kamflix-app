import React, { useEffect, useRef } from "react";

import ModalContentWrapper from "../ui/modal-content-wrapper";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// import { Label } from "@radix-ui/react-label";
// import { ErrorState, LoadingState } from "../loaders/api-loaders";
// import LazyLoadImage from "../loaders/lazy-load-image";
type Props = ModalOptionTypes & {
  data: UserProps;
  onComplete: (data: UserProps) => void;
};

const MovieSearchModal = (props: ModalOptionTypes) => {
  // const { data: profile, onComplete, closeModal } = props as Props;
  const data = props as Props;
  const inputRef = useRef<HTMLInputElement>(null);
  // const [search, setSearch] = useState<null | string>(null);

  // const { error, mutate, data, isPending, isSuccess } = useProductsLatest();
  // const { error, data, isLoading, isSuccess } = useSearchProduct(
  //   search ? "search=" + search : ""
  // );

  console.log(data);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // const handleSearch = () => {
  //   const value = inputRef.current?.value.trim();
  //   // console.log(value);
  //   if (!value) return;
  //   setSearch(value);
  // };

  // const result = search === null ? [] : ((data?.data ?? []) as ProductProps[]);

  return (
    <ModalContentWrapper>
      <div className="h-full sm:rounded-2xl sm:h-auto pb-4">
        <header className="md:px-8 md:py-4 px-4 py-2">
          {/* Search Bar */}
          <div className="relative cursor-pointer">
            {/* <Label htmlFor="search" className="">
              Let's go
            </Label> */}
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-_ opacity-30" />
            <Input
              placeholder="Search movie..."
              className="pl-8 _md:w-[160px]"
            />
          </div>
        </header>
        {/* Search Results */}
        <div className="w-full md:px-8 px-4 overflow-auto min-h-screen sm:min-h-[250px] max-h-[80vh] pb-28 sm:pb-44">
          {/* >> */}
        </div>
      </div>
    </ModalContentWrapper>
  );
};
export default MovieSearchModal;
