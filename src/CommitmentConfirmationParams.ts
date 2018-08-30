import BasicParams from './BasicParams';
import IBasicParams from './IBasicParams';

export interface ICommitmentConfirmationParams extends IBasicParams {
    bidId: string;
}

export default class CommitmentConfirmationParams extends BasicParams {

    private static _protocol = 'general';
    private static _type = 'commitment-confirmation';

    public bidId: string;

    public static getMessageType() {
        return `${CommitmentConfirmationParams._protocol}:${CommitmentConfirmationParams._type}`;
    }

    public static deserialize(json: any): CommitmentConfirmationParams {
        const commitmentConfirmationParams = super.deserialize(json);
        Object.assign(commitmentConfirmationParams, {
            bidId: json.bidId,
        });
        return new CommitmentConfirmationParams(commitmentConfirmationParams);
    }

    constructor(values: Partial<ICommitmentConfirmationParams>) {
        super(values, CommitmentConfirmationParams._protocol, CommitmentConfirmationParams._type);
        this.bidId = values.bidId;
    }

    public serialize() {
        const formattedParams = super.serialize();
        Object.assign(formattedParams, {
            bidId: this.bidId,
            isConfirmed: true,
        });
        return formattedParams;
    }
}