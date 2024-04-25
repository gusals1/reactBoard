import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IBoardListUIProps {
  onAccentKeyword: (keyword: string) => void;
  lastPage: number;
  onClickNew: () => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
  refetchBoardCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  keyWord: string;
}

export interface MatchKeywordProps {
  isMatch: boolean;
}
