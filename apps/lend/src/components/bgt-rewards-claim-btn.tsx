import {
  TransactionActionType,
  lendRewardHelperAbi,
  useBeraJs,
  usePollLendUserBGTRewards,
} from "@bera/berajs";
import { bgtTokenAddress, lendRewardsAddress } from "@bera/config";
import { FormattedNumber, Spinner, TokenIcon, useTxn } from "@bera/shared-ui";
import { Button } from "@bera/ui/button";
import { Icons } from "@bera/ui/icons";
import { formatEther } from "viem";

export default function BGTRewardsClaimBtn() {
  const { account } = useBeraJs();
  const { data: rewards, isLoading, refresh } = usePollLendUserBGTRewards();
  const {
    write,
    isLoading: isClaimingLoading,
    ModalPortal,
  } = useTxn({
    message: `Claiming ${formatEther((rewards ?? 0n) as bigint)} BGT Rewards`,
    actionType: TransactionActionType.CLAIMING_REWARDS,
    onSuccess: () => refresh(),
  });
  return (
    <>
      {ModalPortal}
      <Button
        variant="outline"
        disabled={!rewards || rewards === 0n || isClaimingLoading || isLoading}
        className="flex items-center gap-1 border border-yellow-400 bg-gradient-to-br  from-orange-100 to-yellow-300 text-black"
        onClick={() =>
          write({
            address: lendRewardsAddress,
            abi: lendRewardHelperAbi,
            functionName: "getReward",
            params: [account],
          })
        }
      >
        {!rewards || rewards === 0n ? (
          <>
            <Icons.bgt className="h-6 w-6" />
            No Claimable BGT Rewards
          </>
        ) : isClaimingLoading ? (
          <>
            <Spinner size={16} />
            Claiming BGT Rewards
          </>
        ) : (
          <>
            <Icons.bgt className="h-6 w-6" />
            Claim{" "}
            <FormattedNumber
              value={formatEther((rewards ?? 0n) as bigint)}
              compact
              showIsSmallerThanMin
            />
            BGT Rewards
          </>
        )}
      </Button>
    </>
  );
}
