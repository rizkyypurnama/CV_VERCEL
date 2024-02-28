import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function DialogDefault({ handleDialogOpen }) {
    return (
  
      <>
        <Button onClick={handleDialogOpen} variant="gradient">
          Open Dialog
        </Button>
        <Dialog open={DialogDefault.open} handler={DialogDefault.handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
        <Button
        variant="text"
        color="red"
        onClick={handleDialogOpen}
        className="mr-1"
      >
        <span>Cancel</span>
      </Button>
      <Button variant="gradient" color="green" onClick={handleDialogOpen}>
        <span>Confirm</span>
      </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
